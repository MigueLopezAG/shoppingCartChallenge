import React from 'react';
import { useSelector } from 'react-redux';
import { productToCart } from '../../app/Products/productModel';


const OrderSummary: React.FC = () => {
  
  const {cart} = useSelector((state: any) => state.cart);
  
  const subtotal = cart.reduce((total:number, product:productToCart) => total + product.price, 0);
  const totalPiezas = cart.reduce((total:number, product: productToCart) => total + product.qty, 0);

  return (
    <div className="w-1/4 border p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Total de Piezas:</span>
        <span>{totalPiezas}</span>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
        Ir al Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
