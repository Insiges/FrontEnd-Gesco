import React, { useEffect, useState } from "react";
import { VictoryPie } from "victory";
import { getStudentsWithSex } from "../../../../services/api/school";

export function DonutChart() {
	const [students, setStudents] = useState({});
	const [data, setData] = useState([
		{ x: "Alunas", y: 50 },
		{ x: "Alunos", y: 50 },
	]);

	useEffect(() => {
		const fetchSudents = async () => {
			try {
				const response = await getStudentsWithSex();
				setStudents(response);
			} catch (error) {
				console.error(error);
			}
		};

		fetchSudents();
	}, []);

	console.log(students);
	console.log(data);

	useEffect(() => {
		if (students !== null) {
			const alunas = Number(
				((students.alunas / students.total) * 100).toFixed(2),
			);
			const alunos = Number(
				((students.alunos / students.total) * 100).toFixed(2),
			);
			setData([
				{ x: "Alunas", y: alunas },
				{ x: "Alunos", y: alunos },
			]);
		}
	}, [students]);

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
				labels={({ datum }) => `${datum.x}: ${datum.y}%`} // Exibe o nome e a porcentagem
				style={{ labels: { fontSize: 14, fill: "#003366" } }}
			/>
		</div>
	);
}
