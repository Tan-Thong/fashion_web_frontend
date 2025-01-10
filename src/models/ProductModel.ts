class ProductModel {
    productID : number;
    productName : string;
    material? : string;
    price : number;
    description? : string;
    active : boolean;

    constructor(productID : number, productName : string, material : string, price : number, description : string, active : boolean) {
        this.productID = productID
        this.productName = productName
        this.material = material
        this.price = price
        this.description = description
        this.active = active
    }

}

export default ProductModel;