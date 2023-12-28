import { Action } from "redux";
import FLUX_PRODUCT_CONSTANTS from './productConstants';

export type ProductAction = 
    | IFetchProductCatalogBegin
    | IFetchProductCatalogSuccess
    | IFetchProductCatalogError

export interface IFetchProductCatalogBegin extends Action {
    type: FLUX_PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_REQUEST;
}

export interface IFetchProductCatalogError extends Action {
    type: FLUX_PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_FAIL;
    error: any;
}

export interface IFetchProductCatalogSuccess extends Action {
    type: FLUX_PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_SUCCESS;
    data: any;
}
