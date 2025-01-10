import ProductModel from "../models/ProductModel";
import MyRequest from "./MyRequest";

export async function GetProducts() : Promise<ProductModel[]> {
    const result : ProductModel[] = [];
    // EndPoint
    const endPoint : string = "http://localhost:8080/product";

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
            active : responseData[key].active,
        });
    }

    // Print result
    console.log(response);

    return result;
}