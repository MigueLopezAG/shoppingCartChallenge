import { API } from "../api/product-api";
import { Dispatch } from "redux";
import PRODUCT_CONSTANTS from "./productConstants";
import * as types from './productTypes';
import { ProductModel } from "./productModel";

const fetchProductCatalogRequest = (): types.IFetchProductCatalogBegin => {
    return {
        type: PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_REQUEST
    }
}

const fetchProductCatalogError = (e: any): types.IFetchProductCatalogError => {
    return {
        type: PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_FAIL,
        error: e
    }
}

const fetchProductCatalogSuccess = (data: any): types.IFetchProductCatalogSuccess => {
    return {
        type: PRODUCT_CONSTANTS.FETCH_PRODUCT_CATALOG_SUCCESS,
        data
    }
}

export const fetchProductCatalog = () => {

    const productCatalog: Array<ProductModel> = [];

    return(dispatch: Dispatch) => {
        dispatch(fetchProductCatalogRequest());
        API.getProducts()
        .then((response: any) => {
            const products = response.data;
            console.log("products", products)
            //dispatch(fetchProductCatalogSuccess(response.data));
        }).catch((error:any) => {
            dispatch(fetchProductCatalogError(error.response|| 'Ocurrio un error inesperado'));
        });
    }
}