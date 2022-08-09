-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" SERIAL NOT NULL,
    "contractAddress" TEXT NOT NULL,
    "amountStolen" BIGINT NOT NULL DEFAULT 0,
    "amountRecovered" BIGINT NOT NULL DEFAULT 0,
    "accountAddress" TEXT,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_address_key" ON "Account"("address");

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_accountAddress_fkey" FOREIGN KEY ("accountAddress") REFERENCES "Account"("address") ON DELETE SET NULL ON UPDATE CASCADE;
