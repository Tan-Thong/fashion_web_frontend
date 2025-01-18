import ProductDetailModel from "../models/ProductDetailModel";
import MyRequest from "./MyRequest";

export async function GetProductDetailByProduct(productID : number) : Promise<ProductDetailModel[]>{
    const endPoint = `http://localhost:8080/products/${productID}/productDetails`;
    const result : ProductDetailModel[] = [];
    const response = await MyRequest(endPoint);

    const responseData = response._embedded.productDetails;

    for(const key in responseData) {
        result.push({
            productDetailID : responseData[key].productDetailID,
            stockQuantity : responseData[key].stockQuantity 
        })
    }

    return result;
}