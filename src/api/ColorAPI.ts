import ColorModel from "../models/ColorModel";
import MyRequest from "./MyRequest";

export async function getColorByProductDetail(productDetailID : number) : Promise<ColorModel[]> {
    const result : ColorModel[] = [];
    const endPoint = `http://localhost:8080/product-details/${productDetailID}/color`

    const response = await MyRequest(endPoint);

    return response;
}