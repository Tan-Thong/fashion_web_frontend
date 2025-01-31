import MyRequest from "./MyRequest";
import ImageModel from "../models/ImageModel";

export async function GetImagesByProduct(productID : number) : Promise<ImageModel[]> {
    const result : ImageModel[] = [];

    // const endPoint = `http://localhost:8080/products/${productID}/product-detail/1/images`;
    const endPoint = `http://localhost:8080/products/${productID}/images`

    const response = await MyRequest(endPoint);

    const responseData = response._embedded.imgs;

    for (const key in responseData) {
        result.push({
            imageID : responseData[key].imageID,
            imageName : responseData[key].imageName,
            icon : responseData[key].icon,
            url : responseData[key].url,
            base64 : responseData[key].base64
        });
    }

    return result;
}