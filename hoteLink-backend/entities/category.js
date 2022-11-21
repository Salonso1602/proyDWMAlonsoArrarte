module.exports = class Category {
    name;
    type;
    imageId;

    constructor({name, type, imageId}){
        this.name = name;
        this.type = type;
        this.imageId = imageId;
    }
}
