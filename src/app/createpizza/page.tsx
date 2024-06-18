'use client'
import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import PizzaioBlock from '@/components/PizzaioBlock/PizzaioBlock';
import { useRouter } from 'next/navigation'; // Alterado para 'next/navigation'

export default function CreatePizza() {
  const router = useRouter();
  const [flavour, setflavour] = useState('');
  const [description, setDescription] = useState('');
  const [priceInCents, setPriceInCents] = useState('');

  async function handleAddPizza() {
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ flavour, description, priceInCents: Number(priceInCents), size: 32 }),
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
    <PizzaioBlock name='Criar Pizza'>
      <Input value={flavour} setValue={setflavour} label='Nome da pizza'/>
      <Input value={description} setValue={setDescription} label='Descrição'/>
      <Input value={priceInCents} setValue={setPriceInCents} label='Preço'/>
      <Button
        onClick={handleAddPizza}
        extraclasses='!bg-green-600'
      >
        Adicionar Pizza
      </Button>
    </PizzaioBlock>
  );
};
