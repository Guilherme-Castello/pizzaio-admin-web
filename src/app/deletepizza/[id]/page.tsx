'use client'
import React from "react";
import Button from "@/components/Button/Button";
import PizzaioBlock from "@/components/PizzaioBlock/PizzaioBlock";
import { useParams, useRouter } from 'next/navigation';

export default function DeletePizza() {
  const { id } = useParams();
  const router = useRouter();

  async function handleDeletePizza() {
    try {
      const response = await fetch('/api', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: Number(id) }),
      });
  
      if (response.ok) {
        const data = await response.json();
        router.push('/');
      } else {
        console.error('Error creating pizza');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <PizzaioBlock name='Deletar Pizza'>
      <div className="flex flex-col items-center gap-7">
        <p>Tem certeza que deseja deletar a pizza?</p>
        <div className="gap-2 flex">
          <Button onClick={handleDeletePizza}>Deletar</Button>
          <Button extraclasses="!bg-blue-600" onClick={() => router.push("/")}>
            Cancelar
          </Button>
        </div>
      </div>
    </PizzaioBlock>
  );
}
