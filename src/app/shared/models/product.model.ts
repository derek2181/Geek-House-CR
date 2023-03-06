import { AvailabilityModel } from "./availability.model"
import { ImageModel } from "./image.model"

export interface ProductModel{
    id:number,
    name: string,
    price: number,
    image: ImageModel,
    images:ImageModel[],
    availability:AvailabilityModel,
    path:string,
    description:string,
    stock:number
}