class CategoryModel {
    categoryID : number;
    categoryName : string;
    image : string;
    active : boolean;
    description : string;

    constructor(categoryID : number, categoryName : string, image : string, active : boolean, description : string) {
        this.categoryID = categoryID;
        this.categoryName = categoryName;
        this.image = image;
        this.active = active;
        this.description = description;
    }
}

export default CategoryModel;