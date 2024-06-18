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
