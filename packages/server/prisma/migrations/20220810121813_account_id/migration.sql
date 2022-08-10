/*
  Warnings:

  - You are about to drop the column `accountAddress` on the `Exploit` table. All the data in the column will be lost.
  - Added the required column `accountId` to the `Exploit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Exploit" DROP CONSTRAINT "Exploit_accountAddress_fkey";

-- AlterTable
ALTER TABLE "Exploit" DROP COLUMN "accountAddress",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Exploit" ADD CONSTRAINT "Exploit_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("address") ON DELETE RESTRICT ON UPDATE CASCADE;
