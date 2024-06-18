'use client'

import { useState, useEffect } from 'react';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import PizzaioBlock from '@/components/PizzaioBlock/PizzaioBlock';
import { useParams, useRouter } from 'next/navigation';

export default function EditPizza() {
  const { id } = useParams()
  const router = useRouter()
  const [flavour, setFlavour] = useState('');
  const [description, setDescription] = useState('');
  const [priceInCents, setPriceInCents] = useState('');

  async function handleEditPizza() {
    try {
      const response = await fetch('/api', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ flavour, description, priceInCents: Number(priceInCents), size: 32, id: Number(id) }),
      });
  
      if (response.ok) {
        router.push('/');
      } else {
        console.error('Error updating pizza');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <PizzaioBlock name='Editar Pizza'>
        <Input value={flavour} setValue={setFlavour} label='Sabor da pizza'/>
        <Input value={description} setValue={setDescription} label='Descrição da pizza'/>
        <Input value={priceInCents} setValue={setPriceInCents} label='Valor da pizza'/>
        <Button
          onClick={handleEditPizza}
          extraclasses='!bg-green-600'
        >
          Atualizar Pizza
        </Button>
    </PizzaioBlock>
  );
}
