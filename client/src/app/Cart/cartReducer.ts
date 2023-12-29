import CART_CONSTANTS from './cartConstants';
import { CartAction } from './cartTypes'
import { ProductCatalogModel} from '../Products/productModel';

export interface CartReducerState {
    cart: Array<ProductCatalogModel>;
}

const initialState: CartReducerState = {
    cart: []
}

export const cartReducer = (state = initialState, action: CartAction) => {
    switch (action.type) {
        case CART_CONSTANTS.ADD_TO_CART:
            return {
                ...state,
                cart: action.data
            };

        default:
            return state;
    }
}