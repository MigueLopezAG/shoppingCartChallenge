import React, { useState } from 'react';
import CartProduct from '../../components/Cart/cartProduct';
import OrderSummary from '../../components/Cart/orderSummary';
import { useSelector } from 'react-redux';
import { productToCart } from '../../app/Products/productModel';
import { useNavigate } from 'react-router-dom';


const Cart: React.FC = () => {
  const navigate = useNavigate();
  const {cart} = useSelector((state: any) => state.cart);

  return (
    <section className="flex items-center bg-gray-50 font-poppins ">
        <div className="justify-center flex-1 px-1 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
            <h2 className="mb-10 text-4xl font-bold text-center" onClick={()=>navigate('/')}>Tu Carrito</h2>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12">
                <div className='px-10'>
                {cart.map((product: productToCart) => (
                  <CartProduct key={product.id} product={product}/>
                ))}
                </div>
              </div>
              <div className="w-full lg:w-4/12">
                <OrderSummary/>
              </div>
            </div>
        </div>
    </section>    
  );
};

export default Cart;
