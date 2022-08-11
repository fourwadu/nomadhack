export type Response = {
	id: number;
	address: string;
	exploits: ExploitOrRecoveryType[];
	recoveries: ExploitOrRecoveryType[];
};

export type ExploitOrRecoveryType = {
	id: number;
	timestamp: string;
	contractAddress: string;
	transactionHash: string;
	amount: number;
	accountId: string;
};
