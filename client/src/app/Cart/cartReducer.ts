import CART_CONSTANTS from './cartConstants';
import { CartAction } from './cartTypes'
import { ProductCatalogModel} from '../Products/productModel';

export interface CartReducerState {
    cart: Array<ProductCatalogModel>;
    cartQty: number
}

const initialState: CartReducerState = {
    cart: [],
    cartQty: 0
}

export const cartReducer = (state = initialState, action: CartAction) => {
    switch (action.type) {
        case CART_CONSTANTS.ADD_TO_CART:
            return {
                ...state,
                cart: action.data,
                cartQty: action.data.length
            };

        default:
            return state;
    }
}