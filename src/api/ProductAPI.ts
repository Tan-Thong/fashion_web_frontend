import ProductModel from "../models/ProductModel";
import MyRequest from "./MyRequest";

export async function GetProducts() : Promise<ProductModel[]> {
    const result : ProductModel[] = [];
    // EndPoint
    const endPoint : string = "http://localhost:8080/products";

    // Call function Request
    const response = await MyRequest(endPoint);

    const responseData = response._embedded.products;

    for (const key in responseData) {
        
        result.push({
            productID : responseData[key].productID,
            productName : responseData[key].productName,
            material : responseData[key].material,
            price : responseData[key].price,
            description : responseData[key].description,
            colorID : responseData[key].colorID,
            colorName : responseData[key].colorName,
            images : responseData[key].images,
        });
    }

    return result;
}

export async function GetProductByID(productID : number) : Promise<ProductModel> {
    // EndPoint
    const endPoint : string = `http://localhost:8080/products/${productID}`;

    // Call function Request
    const response = await MyRequest(endPoint);

    return response;
}