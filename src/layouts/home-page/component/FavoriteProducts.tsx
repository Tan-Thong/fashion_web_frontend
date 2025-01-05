import React from "react";
import "./../../../css/favorite-product.css"

interface FavoriteProductProps {
    title : string;
}

function FavoriteProduct({title} : FavoriteProductProps) {
    return(
        <div className="favorite-product">
            <div className="text-wrapper">
                <p className="title">{title}</p>
                <div className="btns">
                    <button type="button" className="btn arrow-left"><img src={"./../images/arrow.png"} alt="" /></button>
                    <button type="button" className="btn"><img src={"./../images/arrow.png"} alt="" /></button>
                </div>
            </div>
            <div className="list-product">
                <a href="" className="item" style={{transform: "translateX(calc((100% + 32px) * 0))"}}>
                    <img src={"./../images/categories/Shoes/sneakers/sneaker-sp1-1.webp"} alt="" />
                    <div className="infor">
                        <p className="sale" style={{color: "#D30303", fontSize: "12px"}}><b>Holiday Sale. <span>-30%</span></b></p>
                        <p className="title" style={{color: "#929292", fontSize: "13px"}}><b>LT 03 Premium Nappa White</b></p>
                        <p className="desc" style={{color: "#929292", fontSize: "13px"}}>Premium Nappa</p>
                        <p className="price" style={{color: "#929292", fontSize: "12px"}}>€188</p>
                    </div>
                </a>
                <a href="" className="item" style={{transform: "translateX(calc((100% + 32px) * 1))"}}>
                    <img src={"./../images/categories/Shoes/sneakers/sneaker-sp1-1.webp"} alt="" />
                    <div className="infor">
                        <p className="sale" style={{color: "#D30303", fontSize: "12px"}}><b>Holiday Sale. <span>-30%</span></b></p>
                        <p className="title" style={{color: "#929292", fontSize: "13px"}}><b>LT 03 Premium Nappa White</b></p>
                        <p className="desc" style={{color: "#929292", fontSize: "13px"}}>Premium Nappa</p>
                        <p className="price" style={{color: "#929292", fontSize: "12px"}}>€188</p>
                    </div>
                </a>
                <a href="" className="item" style={{transform: "translateX(calc((100% + 32px) * 2))"}}>
                    <img src={"./../images/categories/Shoes/sneakers/sneaker-sp1-1.webp"} alt="" />
                    <div className="infor">
                        <p className="sale" style={{color: "#D30303", fontSize: "12px"}}><b>Holiday Sale. <span>-30%</span></b></p>
                        <p className="title" style={{color: "#929292", fontSize: "13px"}}><b>LT 03 Premium Nappa White</b></p>
                        <p className="desc" style={{color: "#929292", fontSize: "13px"}}>Premium Nappa</p>
                        <p className="price" style={{color: "#929292", fontSize: "12px"}}>€188</p>
                    </div>
                </a>
                <a href="" className="item" style={{transform: "translateX(calc((100% + 32px) * 3))"}}>
                    <img src={"./../images/categories/Shoes/sneakers/sneaker-sp1-1.webp"} alt="" />
                    <div className="infor">
                        <p className="sale" style={{color: "#D30303", fontSize: "12px"}}><b>Holiday Sale. <span>-30%</span></b></p>
                        <p className="title" style={{color: "#929292", fontSize: "13px"}}><b>LT 03 Premium Nappa White</b></p>
                        <p className="desc" style={{color: "#929292", fontSize: "13px"}}>Premium Nappa</p>
                        <p className="price" style={{color: "#929292", fontSize: "12px"}}>€188</p>
                    </div>
                </a>
                <a href="" className="item" style={{transform: "translateX(calc((100% + 32px) * 4))"}}>
                    <img src={"./../images/categories/Shoes/sneakers/sneaker-sp1-1.webp"} alt="" />
                    <div className="infor">
                        <p className="sale" style={{color: "#D30303", fontSize: "12px"}}><b>Holiday Sale. <span>-30%</span></b></p>
                        <p className="title" style={{color: "#929292", fontSize: "13px"}}><b>LT 03 Premium Nappa White</b></p>
                        <p className="desc" style={{color: "#929292", fontSize: "13px"}}>Premium Nappa</p>
                        <p className="price" style={{color: "#929292", fontSize: "12px"}}>€188</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default FavoriteProduct;