import React, { useState, useEffect, useRef } from "react";
import "./App.css"
import Footer from "./layouts/header-footer/Footer";
import HomePage from "./layouts/home-page/HomePage";
import { GetProducts } from "./api/ProductAPI";
import ProductPage from "./layouts/product-page/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./layouts/product-detail-page/ProductDetailPage";
import Header from "./layouts/header-footer/Header";

function App() {

  GetProducts().then().catch();

  return (
    <BrowserRouter>
      <div className="content">
        <div className="notify">Holiday Sale. Up to 50% OFF — Don't sleep on it.</div>
        <Header color="#000" logoFilter="invert(0)" />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/collection/sneakers" element={<ProductPage />} /> */}
        </Routes>
        <ProductDetailPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
