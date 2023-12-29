import PRODUCT_CONSTANTS from './productConstants';
import { ProductAction } from './productTypes'
import { ProductCatalogModel, CompleteProduct } from './productModel';

export interface ProductsReducerState {
    productCatalog: Array<ProductCatalogModel>;
    loading: boolean;
    error: any;
    currentProduct: CompleteProduct;
}

const initialState: ProductsReducerState = {
    productCatalog: [],
    currentProduct: {} as CompleteProduct,
    loading: false,
    error: undefined,
}

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_REQUEST:
            return {
                ...state,
                loading: true
            };

        case PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_SUCCESS:
            return {
                ...state,
                loading: false,
                productCatalog: action.data
            };
        
        case PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_FAIL:
            return { 
                ...state,
                loading: false,
                error: action.error
            };

        case PRODUCT_CONSTANTS.SAVE_CURRENT_PRODUCT:
            return{
                ...state,
                currentProduct: action.data
            }

        default:
            return state;
    }
}