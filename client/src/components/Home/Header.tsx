import React from 'react';
//import logo from './logo.png'; // Importa tu logo
import { FaShoppingCart } from 'react-icons/fa'; 

import '../../styles/Header.css'
const Header: React.FC = () => {
  return (
    <div className="header-container">
      <img src={''} alt="Logo" className="logo" />
      <h1 className="title">Tienda en linea</h1>
      <div className="cart-icon">
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Header;