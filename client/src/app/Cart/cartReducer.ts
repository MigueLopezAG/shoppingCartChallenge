import CART_CONSTANTS from './cartConstants';
import { CartAction } from './cartTypes'
import { ProductCatalogModel} from '../Products/productModel';

export interface CartReducerState {
    cart: Array<ProductCatalogModel>;
    errorMessage: string;
    successMessage: string;
}

const initialState: CartReducerState = {
    cart: [],
    errorMessage: '',
    successMessage: ''
}

export const cartReducer = (state = initialState, action: CartAction) => {
    switch (action.type) {
        case CART_CONSTANTS.ADD_TO_CART:
            return {
                ...state,
                cart: action.data,
                successMessage: 'Producto agregado al carrito'
            };
        case CART_CONSTANTS.DELETE_FROM_CART:
            return {
                ...state,
                cart: action.data,
                errorMessage: 'Producto eliminado del carrito'
            };

        case CART_CONSTANTS.CLEAR_ALERTS:
            return {
                ...state,
                errorMessage: '',
                successMessage: ''
            }
        case CART_CONSTANTS.CART_UPDATE:
            return{
                ...state,
                cart: action.data
            }
        case CART_CONSTANTS.EXIST_PRODUCT_ALERT:
            return{
                ...state,
                errorMessage: 'Este producto ya existe en el carrito'
            }

        default:
            return state;
    }
}