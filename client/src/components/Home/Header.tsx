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
      <img src={''} alt="Logo" className="logo" />
      <h1 className="title">Tienda en linea</h1>
      <div 
        className="flex flex-row cart-icon"
        onClick={()=>{
          navigate('/cart');
        }}
      >
        <FaShoppingCart />
        {cartQty !== 0 && <span className="ml-2">{cartQty}</span>}
      </div>
    </div>
  );
};

export default Header;