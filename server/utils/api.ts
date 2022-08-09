export class ApiError extends Error {
	constructor(readonly pub: boolean, message: string) {
		super(message);
	}
}
