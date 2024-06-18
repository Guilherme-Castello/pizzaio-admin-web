'use client'
import { useEffect, useState } from 'react';
import PizzaContainer from "@/components/PizzaContainer/PizzaContainer";
import Button from '@/components/Button/Button';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter()
  const [pizzas, setPizzas] = useState([])
  const fetchPizzas = async () => {
    const response = await fetch('/api');
    if (response.ok) {
      const data = await response.json();
      setPizzas(data)
      return data;
    } else {
      console.error('Error fetching pizzas');
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-10">
      <span className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl">Pizzas Cadastradas</h1>
        <Button extraclasses='!bg-green-600 justify-end' onClick={() => router.push('/createpizza')}>Adicionar Pizza</Button>
      </span>
      {pizzas.length > 0 && pizzas.map((pizza, index) => {
        return(
          <PizzaContainer key={index} pizza={pizza}/>
        )
      })}
    </main>
  );
}
