import { Action } from "redux";
import PRODUCT_CONSTANTS from './productConstants';

export type ProductAction = 
    | IFetchProductCatalogBegin
    | IFetchProductCatalogSuccess
    | IFetchProductCatalogError
    | ISaveCurrentProduct

export interface IFetchProductCatalogBegin extends Action {
    type: PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_REQUEST;
}

export interface IFetchProductCatalogError extends Action {
    type: PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_FAIL;
    error: any;
}

export interface IFetchProductCatalogSuccess extends Action {
    type: PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_SUCCESS;
    data: any;
}

export interface ISaveCurrentProduct extends Action {
    type: PRODUCT_CONSTANTS.SAVE_CURRENT_PRODUCT;
    data: any;
}
