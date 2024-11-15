import React from "react";
import {
	VictoryArea,
	VictoryAxis,
	VictoryChart,
	VictoryLine,
	VictoryTooltip,
} from "victory";

export function SchoolPerformanceChart() {
	const dataThisWeek = [
		{ x: "abr", y: 10 },
		{ x: "mai", y: 50 },
		{ x: "jun", y: 75 },
		{ x: "jul", y: 30 },
		{ x: "ago", y: 40 },
		{ x: "set", y: 20 },
		{ x: "out", y: 60 },
		{ x: "nov", y: 50 },
		{ x: "dec", y: 80 },
	];

	const dataLastWeek = [
		{ x: "abr", y: 15 },
		{ x: "mai", y: 35 },
		{ x: "jun", y: 60 },
		{ x: "jul", y: 45 },
		{ x: "ago", y: 50 },
		{ x: "set", y: 25 },
		{ x: "out", y: 70 },
		{ x: "nov", y: 55 },
		{ x: "dec", y: 65 },
	];

	return (
		<VictoryChart domainPadding={20}>
			<VictoryAxis
				tickValues={[
					"abr",
					"mai",
					"jun",
					"jul",
					"ago",
					"set",
					"out",
					"nov",
					"dec",
				]}
			/>
			<VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
			<VictoryArea
				data={dataThisWeek}
				style={{ data: { fill: "#FBC709", opacity: 0.7 } }}
				interpolation="natural"
			/>
			<VictoryLine
				data={dataLastWeek}
				style={{ data: { stroke: "#060343", strokeWidth: 3 } }}
				interpolation="natural"
				labels={({ datum }) => `${datum.y}`}
				labelComponent={<VictoryTooltip />}
			/>
		</VictoryChart>
	);
}
