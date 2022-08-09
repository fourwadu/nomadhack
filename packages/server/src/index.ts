import { PrismaClient } from "@prisma/client";
import express, { Request, Response, NextFunction } from "express";
import { validateRequest } from "zod-express-middleware";
import { z } from "zod";

import { ApiError } from "./utils/api";

const app = express();

app.use(express.json());
const router = express.Router();

const prisma = new PrismaClient();

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof ApiError) {
		return res
			.json({ error: err.pub ? err.message : "GENERIC_SERVER_ERROR" })
			.status(500);
	}
});

router.post(
	"/account",
	validateRequest({ body: z.object({ address: z.string().optional() }) }),
	async (req, res) => {
		const payload = req.body.address;

		if (!payload) return await prisma;
	}
);

console.log("hi");
