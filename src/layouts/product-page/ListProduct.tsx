import React, { useEffect, useState } from "react";
import ProductModel from "../../models/ProductModel";
import { getProducts } from "../../api/ProductAPI";
import Product from "./component/Product";

const ListProduct : React.FC = () => {
    const [listProduct, setListProduct] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
            getProducts().then(
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
        <div className="shop">
            {
                listProduct.map((product) => (
                    <Product product = {product} key={product.productDetailID} />
                ))
            }

        </div>
    );
}

export default ListProduct;