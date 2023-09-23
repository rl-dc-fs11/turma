/*
  Warnings:

  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Consumo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unidade` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Consumo" DROP CONSTRAINT "Consumo_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "Consumo" DROP CONSTRAINT "Consumo_unidade_id_fkey";

-- DropForeignKey
ALTER TABLE "Unidade" DROP CONSTRAINT "Unidade_cliente_id_fkey";

-- DropTable
DROP TABLE "Cliente";

-- DropTable
DROP TABLE "Consumo";

-- DropTable
DROP TABLE "Unidade";

-- CreateTable
CREATE TABLE "cliente" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unidade" (
    "id" SERIAL NOT NULL,
    "endereco" TEXT NOT NULL,
    "tipo_fornecimento" TEXT NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "unidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consumo" (
    "id" SERIAL NOT NULL,
    "referencia" TEXT NOT NULL,
    "vencimento" TIMESTAMP(3) NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "kwh" DECIMAL(65,30) NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "unidade_id" INTEGER NOT NULL,

    CONSTRAINT "consumo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_cpf_key" ON "cliente"("cpf");

-- AddForeignKey
ALTER TABLE "unidade" ADD CONSTRAINT "unidade_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consumo" ADD CONSTRAINT "consumo_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consumo" ADD CONSTRAINT "consumo_unidade_id_fkey" FOREIGN KEY ("unidade_id") REFERENCES "unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
