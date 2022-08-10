/*
  Warnings:

  - You are about to drop the column `accountAddress` on the `Recovery` table. All the data in the column will be lost.
  - Added the required column `accountId` to the `Recovery` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Recovery" DROP CONSTRAINT "Recovery_accountAddress_fkey";

-- AlterTable
ALTER TABLE "Recovery" DROP COLUMN "accountAddress",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Recovery" ADD CONSTRAINT "Recovery_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("address") ON DELETE RESTRICT ON UPDATE CASCADE;
