import { CompleteProduct, ProductCatalogModel, productToCart } from "../productModel";

export function buildCompleteProduct(product: ProductCatalogModel): CompleteProduct {
  let buildProduct: CompleteProduct = {} as CompleteProduct;
    
  buildProduct.id =[];
  buildProduct.model = product.model;
  buildProduct.code = product.code;
  buildProduct.image = product.image;
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
  productToCart.image = currentProduct.image;
  productToCart.qty = qty;
  productToCart.size = size;
  productToCart.unitPrice = currentProduct.price[index];
  productToCart.price = currentProduct.price[index] * qty;

  return productToCart
}

export function buildProductFromCatalog(product: ProductCatalogModel): productToCart {
  let productToCart: productToCart = {} as productToCart;
  
  productToCart.id = product.id;
  productToCart.code = product.code;
  productToCart.model = product.model;
  productToCart.image = product.image;
  productToCart.qty = 1;
  productToCart.size = product.size;
  productToCart.unitPrice = product.price;
  productToCart.price = product.price;

  return productToCart
}
