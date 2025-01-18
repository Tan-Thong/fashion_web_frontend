import React, { useEffect, useState } from "react";
import "../../css/item-detail.css"
import ImageModel from "../../models/ImageModel";
import { GetImagesByProduct } from "../../api/ImageAPI";
import { GetProductByID, GetProducts } from "../../api/ProductAPI";
import ProductModel from "../../models/ProductModel";
import { Link, useParams } from "react-router-dom";
import Header from "../header-footer/Header";
import { GetProductDetailByProduct } from "../../api/ProductDetailAPI";
import ProductDetailModel from "../../models/ProductDetailModel";
import ColorModel from "../../models/ColorModel";
import { getColorByProductDetail} from "../../api/ColorAPI";

function ProductDetailPage() {
    const [images, setImages] = useState<ImageModel[]>([])
    const [product, setProduct] = useState<ProductModel>()
    const [productDetails, setProductDetails] = useState<ProductDetailModel[]>([])
    const [colors, setColors] = useState<ColorModel[]>([])

    const {productID} = useParams();
    const {productDetailID} = useParams();

    useEffect(() => {
        GetImagesByProduct(parseInt(productID+"")).then(
            imageData => {
                setImages(imageData)
            }
        ).catch(

        )

        GetProductByID(parseInt(productID+"")).then(
            productData => {
                setProduct(productData)
            }
        ).catch(

        )

        GetProductDetailByProduct(parseInt(productID+"")).then(
            productDetailData => {
                setProductDetails(productDetailData)
            }
        ).catch(

        )
    }, [])

    useEffect(() => {
        if (productDetails.length > 0) {
            Promise.all(
                productDetails.map(productDetail => 
                    getColorByProductDetail(productDetail.productDetailID)
                )
            ).then(colorDataArray => {
                setColors(colorDataArray.flat()); // Kết hợp tất cả dữ liệu màu sắc lại
            }).catch(err => {
                console.error(err);
            });
        }
    }, [productDetails]);

    return(
        <div className="content">
            <Header color="#000" logoFilter="invert(0)" />
            <div className="detail">
                <div className="imgs">
                    {
                        images.map((image) => (
                            <img src={image.url} alt="" />
                        ))
                    }
                </div>
                <div className="desc">
                    <form role="form" encType="multipart/form-data">
                        <h3 className="name-product">{product?.productName}</h3>
                        <p className="price" style={{marginTop: "12px"}}>{product?.price}</p>
                        <div className="s-detail" style={{display: "flex", marginTop: "26px"}}>
                            <p><b>Color</b></p>
                            <p style={{marginLeft: "8px"}}>Alabaster Pink</p>
                        </div>
                        <div className="color-wrapper">
                            {
                                productDetails.map((productDetail, index) => (
                                    <a key={productDetail.productDetailID} href={`/products/${productID}/product-details/${productDetail.productDetailID}`}>
                                        <div className="border" style={{ marginTop: "20px" }}>
                                            <div className="circle" style={{ backgroundColor: colors[index]?.colorID || 'defaultColor' }}></div>
                                        </div>
                                    </a>
                                ))
                            }

                        </div>
                        <div className="s-detail" style={{marginTop: "26px"}}>
                            <p><b>Material</b></p>
                            <p style={{marginTop: "16px"}}>{product?.material}</p>
                        </div>

                        <div className="s-detail" style={{marginTop: "26px"}}>
                            <p><b>Details</b></p>
                            <p style={{marginTop: "16px"}}>{product?.description}</p>
                        </div>
                        <a className="btn-submit">ADD TO SHOPPING BAG</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;