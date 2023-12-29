import { Action } from "redux";
import CART_CONSTANTS from './cartConstants';

export type CartAction = 
    | IAddToCart

export interface IAddToCart extends Action {
    type: CART_CONSTANTS.ADD_TO_CART;
    data: any;
}