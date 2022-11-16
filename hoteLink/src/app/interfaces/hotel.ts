import { ILocation } from "./location"

export interface IHotel {
    id: string,
    name : string,
    location : ILocation,
    address : string,
    contactInfo : string,
    attentionHours : string,
    longDescription : string,
    shortDescription : string
}