import { Action } from "redux";
import CART_CONSTANTS from './cartConstants';

export type CartAction = 
    | IAddToCart
    | IDeleteFromCart
    | IClearAlerts
    | ICartUpdate
    | IExistProductAlert

export interface IAddToCart extends Action {
    type: CART_CONSTANTS.ADD_TO_CART;
    data: any;
}

export interface ICartUpdate extends Action {
    type: CART_CONSTANTS.CART_UPDATE,
    data: any
}

export interface IDeleteFromCart extends Action {
    type: CART_CONSTANTS.DELETE_FROM_CART;
    data: any;
}

export interface IClearAlerts extends Action {
    type: CART_CONSTANTS.CLEAR_ALERTS
}

export interface IExistProductAlert extends Action {
    type: CART_CONSTANTS.EXIST_PRODUCT_ALERT
}