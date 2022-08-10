import { PrismaClient } from "@prisma/client";
import express, { Request, Response, NextFunction } from "express";
import { validateRequest } from "zod-express-middleware";
import { z } from "zod";

import { ApiError } from "./utils/api";
import update from "./web3/updateExploitEvents";

const app = express();

app.use(express.json());
const router = express.Router();

const prisma = new PrismaClient();

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof ApiError) {
		return res
			.json({ error: err.pub ? err.message : "GENERIC_SERVER_ERROR" })
			.status(500);
	}
});

router.post(
	"/wallets",
	validateRequest({ body: z.object({ address: z.string().optional() }) }),
	async (req, res) => {
		const address = req.body.address;

		if (address)
			return res.json(
				await prisma.account.findUnique({
					where: { address },
					include: { exploits: true },
				})
			);

		return res.json(
			await prisma.account.findMany({ include: { exploits: true } })
		);
	}
);

app.use("/api", router);

app.listen(3000);
console.log("Listening");
