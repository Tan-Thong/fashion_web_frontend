import React, { useEffect, useState } from "react";
import ProductModel from "../../../models/ProductModel";
import ImageModel from "../../../models/ImageModel";
import { GetImagesByProduct } from "../../../api/ImageAPI";

interface PopularProductInterface {
    product : ProductModel;
    index : number;
};

const PopularProduct : React.FC<PopularProductInterface> = (props) => {
    const productID : number = props.product.productID;
    const [Images, setImages] = useState<ImageModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        GetImagesByProduct(productID).then(
            imageData => {
                setImages(imageData);
                setLoading(false);
            }
        ).catch(

        );
        }, []
    );
    
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
            iconImage = image.base64;
        }
    });
    


    return(
        <a href="" className="item" style={{transform: `translateX(calc((100% + 32px) * ${props.index}))`}}>
            <img src={iconImage} alt={props.product.productName} />
            <div className="infor">
                <p className="sale" style={{color: "#D30303", fontSize: "12px"}}><b>Holiday Sale. <span>-30%</span></b></p>
                <p className="title" style={{color: "#929292", fontSize: "13px"}}><b>{props.product.productName}</b></p>
                <p className="desc" style={{color: "#929292", fontSize: "13px"}}>{props.product.material}</p>
                <p className="price" style={{color: "#929292", fontSize: "12px"}}>€{props.product.price}</p>
            </div>
        </a>
    );
}

export default PopularProduct;