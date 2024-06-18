import { StaticImageData } from "next/image"

export default interface IPizza {
    id: number
    name: string
    description: string
    priceInCents: number
    flavour: string
    img: StaticImageData
  }