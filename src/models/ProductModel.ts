import ImageModel from "./ImageModel";

class ProductModel {
    productDetailID : number;
    stockQuantity : number;
    productID : number;
    productName : string;
    material? : string;
    price : number;
    description? : string;
    colorID : string;
    colorName : string;

    constructor(productID : number, productName : string, material : string, price : number, description : string, colorID : string, colorName : string, productDetailID : number, stockQuantity : number) {
        this.productID = productID
        this.productName = productName
        this.price = price
        this.colorID = colorID;
        this.colorName = colorName;
        this.productDetailID = productDetailID;
        this.stockQuantity = stockQuantity;
    }

}

export default ProductModel;