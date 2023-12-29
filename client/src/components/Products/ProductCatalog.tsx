import React from 'react';
import CardProduct from './cardProduct';
import { ProductCatalogModel } from '../../app/Products/productModel';

interface ProducCatalogProps {
    products: ProductCatalogModel[];
}

const ProductCatalog: React.FC<ProducCatalogProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <CardProduct
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductCatalog;