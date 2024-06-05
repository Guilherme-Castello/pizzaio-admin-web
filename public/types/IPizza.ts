import { StaticImageData } from "next/image"

export default interface IPizza {
    id: number
    name: string
    price_in_cents: number
    ingredients: string[]
    img: StaticImageData
  }