import React, { useEffect, useState } from "react";
import { GetImagesByProduct } from "../../../api/ImageAPI";
import ProductModel from "../../../models/ProductModel";
import ImageModel from "../../../models/ImageModel";
import { GetProductDetailByProduct } from "../../../api/ProductDetailAPI";
import ProductDetailModel from "../../../models/ProductDetailModel";

interface ProductInterface {
    product : ProductModel;
};

const Product : React.FC<ProductInterface> = (props) => {
    const productID : number = props.product.productID;
    const colorID : string = props.product.colorID;
    const [Images, setImages] = useState<ImageModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        GetImagesByProduct(productID, colorID).then(
            imageData => {
                setImages(imageData);
                setLoading(false);
            }
        ).catch(

        );
    }, []);
    
    if(loading) {
        return(
            <div>
                <h1>Data loading ...</h1>
            </div>
        );
    }

    let iconImage : string = "";
    Images.map((image) => {
        if(image.icon) {
            iconImage = image.url;
        }
    });

    return(
        <div className="product">
            <a href={`product-details?productID=${productID}`}>
                <div className="img">
                    {/* <i th:if="${product.stock == 0}" id="soldoutIcon" className="soldout"></i> */}
                        <img src={iconImage} alt={props.product.productName} />
                    {/* <i className="heart wishListHeart" th:classNameappend="${product.isLike} ? 'liked' : ''" th:data-item-id="${product.id}" th:data-is-liked="${product.isLike}"></i> */}
                </div>
                <div className="infor">
                    <p className="sale" style={{color: "#D30303", fontSize: "12px"}}><b>Holiday Sale. <span>-30%</span></b></p>
                    <p className="title" style={{color: "#929292", fontSize: "13px"}}><b>{props.product.productName} {props.product.colorName}</b></p>
                    <p className="desc" style={{color: "#929292", fontSize: "13px"}}>{props.product.material}</p>
                    <p className="price" style={{color: "#929292", fontSize: "12px"}}>€{props.product.price}</p>
                </div>
            </a>
        </div>
    );
}

export default Product;