import React from 'react';

interface ProductProps {
  model: string;
  price: number;
  //imagen: string;
  onAgregarAlCarrito: () => void;
}
console.log("")

const Product: React.FC<ProductProps> = ({ model, price, onAgregarAlCarrito }) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-md flex flex-col items-center">
      <img src={''} alt={model} className="mb-2 rounded-md" />
      <h3 className="text-lg font-semibold">{model}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <button
        className="mt-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
        onClick={onAgregarAlCarrito}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Product;