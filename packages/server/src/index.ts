import { PrismaClient } from "@prisma/client";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import Redis from "ioredis";

const app = express();
const prisma = new PrismaClient();
const client = new Redis();
const router = express.Router();

app.use(express.json());
app.use(cors());

router.get("/wallets", async (req, res) => {
	const cachedValue = await client.get("data");

	if (cachedValue) return res.json(cachedValue);

	console.log("no cache. setting...");
	const response = await prisma.account.findMany({
		include: { exploits: true },
	});

	client.set("data", JSON.stringify(response));
	return res.json(response);
});

app.use("/api", router);

app.listen(3000);
