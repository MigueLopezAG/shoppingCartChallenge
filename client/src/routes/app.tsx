import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import Shop from "../views/Shop";
import ProductDetail from "../views/Product/productDetail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" Component={Shop} />
            <Route  path="/product/:id" Component={ProductDetail} />
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};
export default App;
