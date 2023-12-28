export interface ProductCatalogModel {
    id: number;
    model: string;
    code: string;
    size: string;
    stock: number;
    price: number;
}
export interface ProductModel {
    id: number;
    model: string;
    code: string;
    size: string;
}

export interface StockModel {
    id: number;
    product_id: number;
    stock: number;
}

export interface PriceModel {
    id: number;
    product_id: number;
    price: number;
}