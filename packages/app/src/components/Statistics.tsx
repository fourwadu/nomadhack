import React from "react";
import { Response } from "../utils/types";

type InfoProps = {
	label: string;
	className?: string;
	children?: React.ReactElement | string;
};

const InfoCard = ({ label, children, className }: InfoProps) => {
	return (
		<div className={`flex flex-col gap-1 text-white text-md ${className}`}>
			<div className="text-primary-gray text-sm font-medium">{label}</div>
			{children}
		</div>
	);
};

type Props = { data: Response[] };

const Statistics = ({ data }: Props) => {
	return (
		<div className="flex flex-row gap-4">
			<InfoCard label="Value recovered (%)" className="text-4xl">
				<div className="primary-text-gradient">38%</div>
			</InfoCard>
			<div className="grid grid-cols-2 gap-4">
				<InfoCard label="Value exploited ($)">38%</InfoCard>
				<InfoCard label="Value recovered ($)">38%</InfoCard>
				<InfoCard label="Avg. value exploited ($)">38%</InfoCard>
				<InfoCard label="Avg. value recovered ($)">38%</InfoCard>
			</div>
		</div>
	);
};

export default Statistics;
