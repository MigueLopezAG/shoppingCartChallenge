import React from 'react';
import Product from './cardProduct';

interface Product {
  id: number;
  model: string;
  price: number;
  //imagen: string;
}

interface ProducCatalogProps {
    products: Product[];
}

const ProductCatalog: React.FC<ProducCatalogProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Product
          key={product.id}
          model={product.model}
          price={product.price}
          //imagen={product.imagen}
          onAgregarAlCarrito={() => {
            // Lógica para agregar al carrito
            console.log(`Producto ${product.model} agregado al carrito`);
          }}
        />
      ))}
    </div>
  );
};

export default ProductCatalog;