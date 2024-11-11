import { useEffect, useState } from "react";
import { getGridByTeacher } from "../../../../services/api/timeTable";
import useUserInfos from "../../../../stores/userStore";
import { Grid } from "../../../timetable/components";

export function ScheduleTeacher() {
	const [grid, setGrid] = useState([]);
	const [selectedGrid, setSelectedGrid] = useState(null);
	const [horario, setHorario] = useState([]);
	const { userInfos } = useUserInfos();

	useEffect(() => {
		console.log(userInfos);

		async function fetchGrid() {
			try {
				const response = await getGridByTeacher(userInfos.dados.id);
				setGrid(response);
			} catch (error) {
				console.error(error);
			}
		}
		fetchGrid();
	}, [userInfos]);

	useEffect(() => {
		const hora = grid.map((it) => {
			return it.hora;
		});

		const horariosUnicos = [...new Set(hora)];
		horariosUnicos.sort();
		setHorario(horariosUnicos);
	}, [grid]);
	return (
		<div className="flex justify-center ">
			<div className=" text-center border-2 p-8 rounded-lg mt-1 text-[#060343] w-[970px] mb-[20px]">
				<h3 className="text-lg font-bold">Grade de horários</h3>
				<Grid
					table={grid}
					horario={horario}
					openModal={() => false}
					selectedGrid={setSelectedGrid}
					type={"professor"}
				/>
			</div>
		</div>
	);
}
