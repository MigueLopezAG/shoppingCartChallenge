
import { buildCompleteProduct } from "../builders";
import { ProductModel, PriceModel, StockModel, CompleteProduct, ProductCatalogModel } from "../productModel";

const API_URL = import.meta.env.VITE_API_URL;

export function mergeProductsAndPrices(products: ProductModel[], prices: PriceModel[]): ProductCatalogModel[] {
    const productosWithPrecios: ProductCatalogModel[] = [];
  
    // Crear un mapa para indexar los precios por el 'id' del producto
    const preciosMap: Map<number, PriceModel> = new Map();
    prices.forEach((price) => {
      preciosMap.set(price.product_id, price);
    });
    // Combinar productos y precios utilizando el 'id' del producto
    products.forEach((product) => {
      const correspondingPrice = preciosMap.get(product.id);
      if (correspondingPrice) {
        const productWithPrice: ProductCatalogModel = {
          id: product.id,
          model: product.model,
          code: product.code,
          size: product.size,
          image: API_URL+'/images/'+product.model.replace(" ", "-")+'.jpg',
          price: correspondingPrice.price,
          stock: 0,
        };
        productosWithPrecios.push(productWithPrice);
      }
    });
  
    return productosWithPrecios;
}

export function mergeProductsAndStock(products: ProductCatalogModel[], stock: StockModel[]): ProductCatalogModel[] {
    const productsWithStock: ProductCatalogModel[] = [];
  
    // Crear un mapa para indexar los precios por el 'id' del producto
    const stockMap: Map<number, StockModel> = new Map();
    stock.forEach((stock) => {
        stockMap.set(stock.product_id, stock);
    });
    // Combinar productos y precios utilizando el 'id' del producto
    products.forEach((product) => {
      const correspondingStock = stockMap.get(product.id);
      if (correspondingStock) {
        const productWithStock: ProductCatalogModel = {
          id: product.id,
          model: product.model,
          image: product.image,
          code: product.code,
          size: product.size,
          stock: correspondingStock.stock,
          price: product.price,
        };
        productsWithStock.push(productWithStock);
      }
    });
  
    return productsWithStock;
}

export function getCompleteProduct(products: ProductCatalogModel[], id: number): CompleteProduct {
    let productComplete: CompleteProduct = {} as CompleteProduct;
    const currentProduct = findProductById(products, id);
    productComplete = buildCompleteProduct(currentProduct);
    products.forEach((product) => {
      //if (product.id !== id) {  
        if(product.code === currentProduct.code){
          productComplete.id.push(product.id);
          productComplete.size.push(product.size);
          productComplete.price.push(product.price);
          productComplete.stock.push(product.stock)
        }
      //}
    });
    return productComplete;
}

export function findProductById(products: ProductCatalogModel[], id: number): ProductCatalogModel {
  return products.filter((product) => product.id == id).length !== 0 ? products.filter((product) => product.id == id)[0] : {} as ProductCatalogModel
}

export function getIndexById(completeProduct:CompleteProduct, id: number): number {
  return completeProduct.id.indexOf(Number(id))
}  

export function findIdBySize(completeProduct:CompleteProduct, size: string): number{
  const idIndex = completeProduct.size.indexOf(size);
  return completeProduct.id[idIndex];
}

export function getStockById(products: ProductCatalogModel[], id: number): number {
  const getProduct = findProductById(products, id);
  if(Object(getProduct).length !== 0){
    return getProduct.stock;
  } 
  return 0;
}
