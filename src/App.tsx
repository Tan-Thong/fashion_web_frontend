import React, { useState, useEffect, useRef } from "react";
import Header from "./layouts/Header";
import Banner from "./layouts/Banner";
import "./App.css"
import Collection from "./layouts/Collection";

function App() {
  return (
    <div className="content">
      <div className="notify">Holiday Sale. Up to 50% OFF — Don't sleep on it.</div>
      <Header />
      <Banner />
      <div className="main">
          <Collection />

      </div>
    </div>
  );
}

export default App;
