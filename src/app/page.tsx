'use client'
import { useEffect, useState } from 'react';
import PizzaContainer from "@/components/PizzaContainer/PizzaContainer";
export default function Home() {

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
      <p>Pizza List</p>
      {pizzas.length > 0 && pizzas.map((pizza, index) => {
        return(
          <PizzaContainer key={index} pizza={pizza}/>
        )
      })}
    </main>
  );
}
