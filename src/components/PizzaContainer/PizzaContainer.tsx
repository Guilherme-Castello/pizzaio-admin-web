import React, { ButtonHTMLAttributes } from 'react'
import IPizza from '../../../public/types/IPizza'
import Image from "next/image";
import Button from "@/components/Button/Button";


interface IPizzaContainer {
  pizza: IPizza
}

export default function PizzaContainer({ pizza }: IPizzaContainer) {
  return (
    <div
      className="bg-yellow-400/50 w-full h-20 px-5 flex justify-between"
    >
      <div className="w-[20%] justify-center pt-[5px]">
        <Image src={pizza.img} alt="pizza_example" width={105} height={105} className="rounded-md" />
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="w-full flex justify-around gap-2 items-center">
          <p className="text-xl">{pizza.name}</p>
          <p className="text-green-600">R$ {(pizza.price_in_cents / 100).toFixed(2)}</p>
        </div>
        <div className="w-full flex px-5 items-center justify-center gap-4">
          {pizza.ingredients.map((ingredient, idx) => <p key={idx} className="text-red-500">{ingredient}</p>)}
        </div>
      </div>
      <div className="w-[20%] justify-center items-center flex gap-4">
        <Button extraclasses="!bg-blue-700">Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  )
}