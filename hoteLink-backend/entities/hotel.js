module.exports = class Hotel {
    id
    name
    location
    address
    contactInfo
    attentionHours
    longDescription
    shortDescription

    constructor({id, name, location, address, contactInfo, attentionHours, longDescription, shortDescription}) {
        this.id = id
        this.name = name
        this.location = location
        this.address = address
        this.contactInfo = contactInfo
        this.attentionHours = attentionHours
        this.longDescription = longDescription
        this.shortDescription = shortDescription
    }
}