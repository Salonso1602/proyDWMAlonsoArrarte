module.exports = class Location {
    id
    name
    longDescription
    shortDescription

    constructor({id, name, longDescription, shortDescription}) {
        this.id = id
        this.name = name
        this.longDescription = longDescription
        this.shortDescription = shortDescription
    }
}