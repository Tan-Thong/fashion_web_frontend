class ImageModel {
    imageID : number;
    imageName : string;
    icon : boolean;
    url : string;
    base64 : string;

    constructor(imageID : number, imageName : string, icon : boolean, url : string, base64 : string) {
        this.imageID = imageID;
        this.imageName = imageName;
        this.icon = icon;
        this.url = url;
        this.base64 = base64;
    }
}

export default ImageModel;