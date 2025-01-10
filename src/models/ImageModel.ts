class ImageModel {
    imageID : number;
    icon : boolean;
    url : string;
    base64 : string;

    constructor(imageID : number, icon : boolean, url : string, base64 : string) {
        this.imageID = imageID;
        this.icon = icon;
        this.url = url;
        this.base64 = base64;
    }
}

export default ImageModel;