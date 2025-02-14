import MyRequest from "./MyRequest";
import ImageModel from "../models/ImageModel";

export async function GetImagesByProduct(productID : number, colorID : string) : Promise<ImageModel[]> {
    const result : ImageModel[] = [];

    // console.log("productID:", productID);
    // console.log("colorID:", colorID);
    const newColorID = colorID.replace("#", "%23");

    const endPoint = `http://localhost:8080/images?productID=${productID}&colorID=${newColorID}`;
    // const endPoint = `http://localhost:8080/products/${productID}/images`

    const response = await MyRequest(endPoint);

    // const responseData = response._embedded.imgs;

    for (const key in response) {
        result.push({
            imageID : response[key].imageID,
            imageName : response[key].imageName,
            icon : response[key].icon,
            url : response[key].url,
            base64 : response[key].base64
        });
    }

    return result;
}