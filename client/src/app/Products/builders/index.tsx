import { CompleteProduct, ProductCatalogModel, productToCart } from "../productModel";

export function buildCompleteProduct(product: ProductCatalogModel): CompleteProduct {
  let buildProduct: CompleteProduct = {} as CompleteProduct;
    
  buildProduct.id =[];
  buildProduct.model = product.model;
  buildProduct.code = product.code;
  buildProduct.size = [];
  buildProduct.stock = [];
  buildProduct.price = [];
    
  return buildProduct;
}

export function buildProductByIndex(currentProduct: CompleteProduct, index: number, qty: number, size: string): productToCart {
  let productToCart: productToCart = {} as productToCart;
  
  productToCart.id = currentProduct.id[index];
  productToCart.code = currentProduct.code;
  productToCart.model = currentProduct.model;
  productToCart.qty = qty;
  productToCart.size = size;
  productToCart.unitPrice = currentProduct.price[index];
  productToCart.price = currentProduct.price[index] * qty;

  return productToCart
}
