import React from "react";
import { VictoryPie } from "victory";

export function DonutChart() {
	const data = [
		{ x: "Alunas", y: 60 },
		{ x: "Alunos", y: 40 },
	];

	return (
		<>
			<div className="flex  justify-evenly gap-2">
				<div className="flex gap-3">
					<span className="p-4 bg-[#28C2A0] rounded-xl"></span>
					<p className="self-center">{data[0].x}</p>
				</div>
				<div className="flex  gap-3">
					<span className="p-4 bg-[#FBC709] rounded-xl"></span>
					<p className="self-center">{data[1].x}</p>
				</div>
			</div>
			<VictoryPie
				data={data}
				width={350} // Adjust width for smaller size
				height={350} // Adjust height for smaller size
				innerRadius={80} // Controls the hole size for the donut effect
				colorScale={["#28C2A0", "#FBC709"]}
				labels={() => null}
				style={{ labels: { fontSize: 14, fill: "#003366" } }}
			/>
		</>
	);
}