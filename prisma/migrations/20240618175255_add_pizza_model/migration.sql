-- CreateTable
CREATE TABLE "Pizza" (
    "id" SERIAL NOT NULL,
    "flavour" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "priceInCents" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("id")
);
