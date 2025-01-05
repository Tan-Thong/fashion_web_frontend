import React from "react";
import "./../../../css/category.css"

interface CategoryProps {
    urlImage1 : string;
    urlImage2 : string;
    title : string;
    shop : string;
    position : string;
}

function Category({urlImage1, urlImage2, title, shop, position} : CategoryProps) {
    return(
        <div className="section-category">
            <a href="" className="shop">
                <div className="img-1">
                    <img src={urlImage1} alt="" />
                </div>
                <div className="img-2">
                    <img src={urlImage2} alt="" />
                </div>
            </a>
            <div className="desc">
                <div className="text-wrapper" style={{gridColumn: position}}>
                    <div className="square"></div>
                    <p className="title">{title}</p>
                    <div className="shop-link">
                        <a href="" className="btn-shop">{shop}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;