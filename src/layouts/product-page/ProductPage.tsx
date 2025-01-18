import React from "react";
import "./../../css/items.css"
import ListProduct from "./ListProduct";
import Header from "../header-footer/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailPage from "../product-detail-page/ProductDetailPage";

function ProductPage() {
    return(
        <div>
            <Header color="#000" logoFilter="invert(0)" />
            <ListProduct />
        </div>
    );
}

export default ProductPage;