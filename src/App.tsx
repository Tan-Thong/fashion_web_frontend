import React, { useState, useEffect, useRef } from "react";
import "./App.css"
import Header from "./layouts/header-footer/Header";
import Footer from "./layouts/header-footer/Footer";
import HomePage from "./layouts/home-page/HomePage";

function App() {
  return (
    <div className="content">
      <div className="notify">Holiday Sale. Up to 50% OFF — Don't sleep on it.</div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
