import express, { Request, Response, NextFunction } from "express";
import { validateRequest } from "zod-express-middleware";
import { z } from "zod";

import { ApiError } from "./utils/api";

const app = express();

app.use(express.json());
const router = express.Router();

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof ApiError) {
		return res
			.json({ error: err.pub ? err.message : "GENERIC_SERVER_ERROR" })
			.status(500);
	}
});

router.post(
	"/account",
	validateRequest({ query: z.object({ email: z.string() }) }),
	(req, res) => {
		const payload = req.body();
	}
);
