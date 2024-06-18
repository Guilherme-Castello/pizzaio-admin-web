import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { flavour, description, priceInCents, size } = await req.json();
    if (!flavour || !description || !priceInCents || !size) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const pizza = await prisma.pizza.create({
      data: {
        flavour,
        description,
        priceInCents,
        size,
      },
    });

    return NextResponse.json(pizza, { status: 201 });
  } catch (error) {
    console.error('Error creating pizza:', error);
    return NextResponse.json({ error: "Error creating pizza" }, { status: 500 });
  }
}
export async function GET() {
  try {
    const pizzas = await prisma.pizza.findMany();
    return NextResponse.json(pizzas, { status: 200 });
  } catch (error) {
    console.error('Error fetching pizzas:', error);
    return NextResponse.json({ error: "Error fetching pizzas" }, { status: 500 });
  }
}
  
export async function PUT(req: NextRequest) {
  try {
    const { id, flavour, description, priceInCents, size } = await req.json();
    if (!id || !flavour || !description || !priceInCents || !size) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const pizza = await prisma.pizza.update({
    where: { id },
    data: {
        flavour,
        description,
        priceInCents,
        size,
    },
    });

    return NextResponse.json(pizza, { status: 200 });
  } catch (error) {
    console.error('Error updating pizza:', error);
    return NextResponse.json({ error: "Error updating pizza" }, { status: 500 });
  }
}


