import React, { ButtonHTMLAttributes } from 'react'
import IPizza from '../../../public/types/IPizza'
import Image from "next/image";
import Button from "@/components/Button/Button";
import pizza_example from '@/images/pizza_exemple.jpg'
import { useRouter } from 'next/navigation';


interface IPizzaContainer {
  pizza: IPizza
}

export default function PizzaContainer({ pizza }: IPizzaContainer) {
  const router = useRouter();
  console.log(pizza)
  return (
    <div
      className="bg-yellow-400/50 w-full h-20 px-5 flex justify-between"
    >
      <div className="w-[20%] justify-center pt-[5px]">
        <Image src={pizza_example} alt="pizza_example" width={105} height={105} className="rounded-md" />
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="w-full flex justify-around gap-2 items-center">
          <p className="text-xl">{pizza.flavour}</p>
          <p className="text-green-600">R$ {(pizza.priceInCents / 100).toFixed(2)}</p>
        </div>
        <div className="w-full flex px-5 items-center justify-center gap-4">
          <p className="text-red-500">{pizza.description}</p>
        </div>
      </div>
      <div className="w-[20%] justify-center items-center flex gap-4">
        <Button extraclasses="!bg-blue-700" onClick={() => router.push(`editpizza/${pizza.id}`)}>Edit</Button>
        <Button onClick={() => router.push(`deletepizza/${pizza.id}`)}>Delete</Button>
      </div>
    </div>
  )
}