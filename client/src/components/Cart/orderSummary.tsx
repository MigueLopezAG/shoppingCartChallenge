import React from 'react';
import { useSelector } from 'react-redux';
import { productToCart } from '../../app/Products/productModel';


const OrderSummary: React.FC = () => {

  const { cart } = useSelector((state: any) => state.cart);

  const subtotal = cart.reduce((total: number, product: productToCart) => total + (product.price * product.qty), 0);
  const totalPiezas = cart.reduce((total: number, product: productToCart) => total + product.qty, 0);

  return (
    <div className="px-6 mb-14">
      <div>
        <h2 className="mb-6 text-3xl font-bold ">Resumen del Pedido</h2>
        <div
          className="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border rounded-xl">
          <span>Total de piezas</span>
          <span className="flex items-center text-xl">
            <span>{totalPiezas}</span>
          </span>
        </div>
        <div
          className="flex items-center justify-between px-10 py-4 mb-6 font-medium leading-8 bg-gray-100 border rounded-xl">
          <span>Total</span>
          <span className="flex items-center text-xl text-blue-500 dark:text-blue-500">
            <span className="mr-2 text-base">$</span>
            <span>{subtotal.toFixed(2)}</span>
          </span>
        </div>
        <a className="inline-block w-full px-6 py-4 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-gray-500 lg:w-auto hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
          href="#">Checkout</a>
      </div>
    </div>
  );
};

export default OrderSummary;
