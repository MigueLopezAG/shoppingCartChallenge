
import { ProductModel, PriceModel, StockModel, ProductCatalogModel } from "../productModel";

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

// export function getProductsBySize(products: ProductModel[]): ProductCatalogModel[] {
//     const unicProducts: ProductCatalogModel[] = [];
  
//     products.forEach((product) => {
//       const exist = unicProducts.find((p) => p.code === product.code);
//         console.log("unicProducts", unicProducts)
//       if (exist) {
//         if (!exist.size.includes(product.size)) {
//             exist.size.push(product.size);
//         }
//       } else {
//         const nuevoProducto: ProductCatalogModel = {
//           id: product.id,
//           model: product.model,
//           code: product.code,
//           size: [product.size],
//           stock: 0,
//           price: 0
//         };
//         unicProducts.push(nuevoProducto);
//       }
//     });
//     return unicProducts;
//   }