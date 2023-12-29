import { findProductById } from "../Products/helper";
import { ProductCatalogModel, productToCart } from "../Products/productModel";
import CART_CONSTANTS from "./cartConstants";
import * as types from './cartTypes';
import { Dispatch } from "redux";

const saveCart = (data: any): types.IAddToCart => {
    return {
        type: CART_CONSTANTS.ADD_TO_CART,
        data
    }
}

const dispatchUpdateCart = (data: any): types.ICartUpdate => {
    return {
        type: CART_CONSTANTS.CART_UPDATE,
        data
    }
}


export const addToCart = (cart: Array<productToCart>, productToAdd:productToCart) => {
    const existProductInCartIndex = cart.findIndex((product) => product.id === productToAdd.id);

    if (existProductInCartIndex !== -1) {
      const updateCart = [...cart];
      updateCart[existProductInCartIndex].qty = productToAdd.qty;
      return (dispatch: Dispatch) =>{
        dispatch(dispatchExistAlertProduct())
        dispatch(dispatchUpdateCart(updateCart))
    }
    } else {
        return (dispatch: Dispatch) =>{
            dispatch(saveCart([...cart, productToAdd]));
        }
    }
}

const deleteProduct = (data: any): types.IDeleteFromCart => {
    return {
        type: CART_CONSTANTS.DELETE_FROM_CART,
        data
    }
}

export const deleteById = (cart: Array<productToCart>, id: number) => {
    const deleteFromCart = cart.filter((product) => product.id !== id);

    return (dispatch: Dispatch) => {
        dispatch(deleteProduct(deleteFromCart))
    }
}

export const updateQtyById = (cart: Array<productToCart>, productCatalog: ProductCatalogModel[], id: number, qty:number) => {
    const findProductToUpdate = cart.findIndex((product) => product.id == id);
    const getProduct = findProductById(productCatalog, id); 
    if (findProductToUpdate !== -1 && qty <= getProduct.stock) {
        const updateCart = [...cart];
        updateCart[findProductToUpdate].qty = qty;
        return (dispatch: Dispatch) =>{
          dispatch(saveCart(updateCart))
      }
      } else {
          return (dispatch: Dispatch) =>{
              dispatch(saveCart([...cart]));
          }
      }
}

const dispatchClearAlert = (): types.IClearAlerts => {
    return {
        type: CART_CONSTANTS.CLEAR_ALERTS
    }
}

export const clearAlerts = () => {
    return(dispatch: Dispatch) => { dispatch(dispatchClearAlert()) }
}

const dispatchExistAlertProduct = (): types.IExistProductAlert => {
    return {
        type: CART_CONSTANTS.EXIST_PRODUCT_ALERT
    }
}
