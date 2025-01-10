import CategoryModel from "../models/CategoryModel";
import MyRequest from "./MyRequest";

export async function GetCollection() : Promise<CategoryModel[]> {
    const result : CategoryModel[] = [];

    const endPoint : string = "http://localhost:8080/collection";

    const response = await MyRequest(endPoint);

    const responseData = response._embedded.categories

    for (const key in responseData) {
        result.push({
            categoryID : responseData[key].categoryID,
            categoryName : responseData[key].categoryName,
            image : responseData[key].image,
            active : responseData[key].active,
            description : responseData[key].description
        });
    }

    return result;
}