import React from "react";
import "./../../css/items.css"
import ListProduct from "./ListProduct";
import Header from "../header-footer/Header";

function ProductPage() {
    return(
        <div>
            <Header color="#000" logoFilter="invert(0)" />
            <ListProduct />
        </div>
    );
}

export default ProductPage;