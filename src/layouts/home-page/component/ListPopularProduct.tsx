import React, { useEffect, useState } from "react";
import "./../../../css/popular-product.css"
import ProductModel from "../../../models/ProductModel";
import { GetProducts } from "../../../api/ProductAPI";
import PopularProduct from "./PopularProduct";

interface FavoriteProductProps {
    title : string;
}
const ListPopularProduct : React.FC<FavoriteProductProps> = (props) => {
    const [listPopularProduct, setListProduct] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
            GetProducts().then(
                productData => {
                    setListProduct(productData);
                    setLoading(false);
                }
            ).catch(

            );
        },[] // Just call once time
    )

    if(loading) {
        return(
            <div>
                <h1>Data loading ...</h1>
            </div>
        );
    }

    return(
        <div className="favorite-product">
            <div className="text-wrapper">
                <p className="title">{props.title}</p>
                <div className="btns">
                    <button type="button" className="btn arrow-left"><img src={"./../images/arrow.png"} alt="" /></button>
                    <button type="button" className="btn"><img src={"./../images/arrow.png"} alt="" /></button>
                </div>
            </div>
            <div className="list-product">
                {
                    listPopularProduct.map((product , i = 0) => (
                        <PopularProduct product = {product} index = {i++} />
                    ))
                }

                {/* <a href="" className="item" style={{transform: "translateX(calc((100% + 32px) * 0))"}}>
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
                </a> */}
            </div>
        </div>
    );
}

export default ListPopularProduct;