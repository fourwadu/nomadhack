import React, { useEffect, createContext, useContext, useState } from "react";
import axios from "axios";

import { Response } from "./utils/types";
import Statistics from "./components/Statistics";

function App() {
	const [data, setData] = useState<Response[]>([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/wallets")
			.then((res) => JSON.parse(res.data))
			.then(setData);
	}, []);

	return (
		<div className="h-full w-full flex flex-col background-gradient p-8">
			<div className="Title__Header primary-text-gradient text-2xl mb-8">
				Nomad Protocol Hack
				<div className="text-primary-gray font-semibold text-sm">08/2/22</div>
			</div>
			<Statistics data={data} />
		</div>
	);
}

export default App;
