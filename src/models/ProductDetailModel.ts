class ProductDetailModel {
    productDetailID: number;
    stockQuantity : number;

    constructor(productDetailID: number, stockQuantity : number) {
        this.productDetailID = productDetailID;
        this.stockQuantity = stockQuantity;
    }
}

export default ProductDetailModel;
