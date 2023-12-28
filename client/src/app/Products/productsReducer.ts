import PRODUCT_CONSTANTS from './productConstants';
import { ProductAction } from './productTypes'
import { ProductCatalogModel } from './productModel';

export interface ProductsReducerState {
    productCatalog: Array<ProductCatalogModel>;
    loading: boolean;
    error: any;
}

const initialState: ProductsReducerState = {
    productCatalog: [],
    loading: false,
    error: undefined
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

        default:
            return state;
    }
}