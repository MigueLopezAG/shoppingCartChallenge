import { API } from "../api/product-api";
import { Dispatch } from "redux";
import PRODUCT_CONSTANTS from "./productConstants";
import * as types from './productTypes';
import { ProductCatalogModel } from "./productModel";
import { mergeProductsAndPrices, mergeProductsAndStock, getCompleteProduct } from "./helper";

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

    let productCatalog: Array<ProductCatalogModel> = [];

    return(dispatch: Dispatch) => {
        dispatch(fetchProductCatalogRequest());
        API.getProducts()
        .then((response: any) => {
            const products = response.data;
            API.getPrices().then((response: any) =>{
                 const prices = response.data;
                productCatalog = mergeProductsAndPrices(products, prices);
                API.getStock().then((response: any) =>{
                    const stock = response.data;
                    productCatalog = mergeProductsAndStock(productCatalog, stock);
                    dispatch(fetchProductCatalogSuccess(productCatalog))
                }).catch((error:any) => {
                    dispatch(fetchProductCatalogError(error.response|| 'Ocurrio un error inesperado'));
                });
            }).catch((error:any) => {
                dispatch(fetchProductCatalogError(error.response|| 'Ocurrio un error inesperado'));
            });
        }).catch((error:any) => {
            dispatch(fetchProductCatalogError(error.response|| 'Ocurrio un error inesperado'));
        });
    }
}

const saveCurrentProduct = (data: any): types.ISaveCurrentProduct => {
    return {
        type: PRODUCT_CONSTANTS.SAVE_CURRENT_PRODUCT,
        data
    }
}

export const saveActualProductComplete = (productCatalog:Array<ProductCatalogModel> ,id: number) => {
    return(dispatch: Dispatch) =>{
        dispatch(saveCurrentProduct(getCompleteProduct(productCatalog, id)))
    }
}