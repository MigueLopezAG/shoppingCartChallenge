import React, { useState } from 'react';
import CartProduct from '../../components/Cart/cartProduct';
import OrderSummary from '../../components/Cart/orderSummary';
import { useSelector } from 'react-redux';
import { productToCart } from '../../app/Products/productModel';


const Cart: React.FC = () => {

  const {cart} = useSelector((state: any) => state.cart);

  return (
    <div className="flex p-4">
      {/* Lista de productos en el carrito */}
      <div className="w-3/4 pr-4">
        <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
        {cart.map((product: productToCart) => (
          <CartProduct key={product.id} product={product}/>
        ))}
      </div>

      {/* Resumen del pedido (Order Summary) */}
      <OrderSummary/>
    </div>
  );
};

export default Cart;
