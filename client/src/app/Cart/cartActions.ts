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

export const addToCart = (cart: Array<productToCart>, productToAdd:productToCart) => {
    const existProductInCartIndex = cart.findIndex((product) => product.id === productToAdd.id);

    if (existProductInCartIndex !== -1) {
      const updateCart = [...cart];
      updateCart[existProductInCartIndex].qty = productToAdd.qty;
      return (dispatch: Dispatch) =>{
        dispatch(saveCart(updateCart))
    }
    } else {
        return (dispatch: Dispatch) =>{
            dispatch(saveCart([...cart, productToAdd]));
        }
    }
}

export const deleteById = (cart: Array<productToCart>, id: number) => {
    const deleteFromCart = cart.filter((product) => product.id !== id);

    return (dispatch: Dispatch) => {
        dispatch(saveCart(deleteFromCart))
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