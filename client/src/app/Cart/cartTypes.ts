import { Action } from "redux";
import CART_CONSTANTS from './cartConstants';

export type CartAction = 
    | IAddToCart
    | IDeleteFromCart

export interface IAddToCart extends Action {
    type: CART_CONSTANTS.ADD_TO_CART;
    data: any;
}

export interface IDeleteFromCart extends Action {
    type: CART_CONSTANTS.DELETE_FROM_CART;
    data: any;
}