import React from "react";
import { VictoryPie } from "victory";

export function DonutChart() {
	const data = [
		{ x: "Alunas", y: 60 },
		{ x: "Alunos", y: 40 },
	];

	return (
		<div className="w-full h-full flex-col justify-center">
			<div>
				<div className="flex justify-evenly gap-2">
					<div className="flex gap-1">
						<span className="p-4 bg-[#060273] rounded-xl"></span>
						<p className="self-center">{data[0].x}</p>
					</div>
					<div className="flex gap-1">
						<span className="p-4 bg-[#FCD52E] rounded-xl"></span>
						<p className="self-center">{data[1].x}</p>
					</div>
				</div>
			</div>

			<VictoryPie
				data={data}
				innerRadius={80} // Controls the hole size for the donut effect
				colorScale={["#060273", "#FCD52E"]}
				labels={() => null}
				style={{ labels: { fontSize: 14, fill: "#003366" } }}
			/>
		</div>
	);
}
