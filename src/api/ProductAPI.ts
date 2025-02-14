import ProductModel from "../models/ProductModel";
import { getColorByProduct } from "./ColorAPI";
import MyRequest from "./MyRequest";

export async function getProducts() : Promise<ProductModel[]> {
    const result : ProductModel[] = [];
    // EndPoint
    const endPoint : string = "http://localhost:8080/test-products";
    // const endPoint : string = "http://localhost:8080/product-details";

    // Call function Request
    const response = await MyRequest(endPoint);

    // const responseData = response._embedded.products;
    console.log(response)

    for (const key in response) {
        
        result.push({
            productDetailID : response[key].productDetailID,
            stockQuantity : response[key].stockQuantity,
            productID : response[key].productID,
            productName : response[key].productName,
            material : response[key].material,
            price : response[key].price,
            description : response[key].description,
            colorID : response[key].colorID,
            colorName : response[key].colorName,
        });
    }

    return result;
}

export async function getProductByID(productID : number) : Promise<ProductModel> {
    // EndPoint
    const endPoint : string = `http://localhost:8080/products/${productID}`;

    // Call function Request
    const response = await MyRequest(endPoint);

    return response;
}