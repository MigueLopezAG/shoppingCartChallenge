import { productToCart } from "../Products/productModel";
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
