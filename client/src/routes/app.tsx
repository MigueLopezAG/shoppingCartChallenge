import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import Shop from "../views/Shop";
//import Product from "../views/Product";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" Component={Shop} />
          {/* <Route exact path="/product/:id" component={Product} /> */}
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
