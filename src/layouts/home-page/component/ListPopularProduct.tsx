import React, { useEffect, useState } from "react";
import "./../../../css/popular-product.css";
import ProductModel from "../../../models/ProductModel";
import { getProducts } from "../../../api/ProductAPI";
import PopularProduct from "./PopularProduct";

interface FavoriteProductProps {
    title: string;
}

const ListPopularProduct: React.FC<FavoriteProductProps> = (props) => {
    const [listPopularProduct, setListProduct] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getProducts()
            .then((productData) => {
                setListProduct(productData);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < listPopularProduct.length - 4 ? prevIndex + 1 : prevIndex
        );
    };

    if (loading) {
        return (
            <div>
                <h1>Data loading ...</h1>
            </div>
        );
    }

    return (
        <div className="favorite-product">
            <div className="text-wrapper">
                <p className="title">{props.title}</p>
                <div className="btns">
                    <button
                        type="button"
                        className="btn arrow-left"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <img src={"./../images/arrow.png"} alt="Previous" />
                    </button>
                    <button
                        type="button"
                        className="btn arrow-right"
                        onClick={handleNext}
                        disabled={currentIndex === listPopularProduct.length - 4}
                    >
                        <img src={"./../images/arrow.png"} alt="Next" />
                    </button>
                </div>
            </div>
            <div className="list-product">
                {listPopularProduct.map((product, index) => (
                    <PopularProduct
                        key={index}
                        product={product}
                        index={index - currentIndex}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListPopularProduct;
