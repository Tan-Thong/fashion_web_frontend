import ImageModel from "./ImageModel";

class ProductModel {
    productID : number;
    productName : string;
    material? : string;
    price : number;
    description? : string;
    colorID : string;
    colorName : string;
    images : ImageModel[]; 

    constructor(productID : number, productName : string, material : string, price : number, description : string, colorID : string, colorName : string, images : ImageModel[]) {
        this.productID = productID
        this.productName = productName
        this.material = material
        this.price = price
        this.description = description
        this.colorID = colorID
        this.colorName = colorName
        this.images = images
    }

}

export default ProductModel;