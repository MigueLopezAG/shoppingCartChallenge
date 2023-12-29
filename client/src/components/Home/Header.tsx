import React from 'react';
//import logo from './logo.png'; // Importa tu logo
import { FaShoppingCart } from 'react-icons/fa'; 

import '../../styles/Header.css'
import { useSelector } from 'react-redux';
import { productToCart } from '../../app/Products/productModel';
import { useNavigate } from 'react-router-dom';
const Header: React.FC = () => {
  
  const navigate = useNavigate();
  const {cart} = useSelector((state: any) => state.cart);
  const cartQty = cart.reduce((total:number, product: productToCart) => total + product.qty, 0);
  
  return (
    <div className="header-container">
      <img 
        src={''} 
        alt="Logo" 
        className="logo w-12 lg:w-20 cursor-pointer" 
        onClick={()=>{navigate('/');}}
      />
      <h1 
        className="title text-lg lg:text-2xl cursor-pointer" 
        onClick={()=>{navigate('/');}}
      >
        Tienda en linea
      </h1>
      <div 
        className="flex flex-row items-center cart-icon cursor-pointer"
        onClick={()=>{navigate('/cart');}}
      >
        <FaShoppingCart className="text-xl lg:text-2xl"/>
        {cartQty !== 0 && <span className="ml-2">{cartQty}</span>}
      </div>
    </div>
  );
};

export default Header;