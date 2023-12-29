import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/Home/Header";
import Shop from "../views/Shop";
import ProductDetail from "../views/Product/productDetail";
import Cart from "../views/Cart/Cart";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" Component={Shop} />
            <Route  path="/product/:id" Component={ProductDetail} />
            <Route path="/cart" Component={Cart} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
