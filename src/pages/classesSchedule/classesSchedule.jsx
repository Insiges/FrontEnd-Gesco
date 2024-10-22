import { useEffect, useState } from "react";
import { getClasses } from "../../services/api/class";
import { ClassTable, SearchFilter } from "./components/index";

export const ClassesSchedule = () => {
	const [classe, setClasse] = useState([]);

	useEffect(() => {
		const fetchClasse = async () => {
			const response = await getClasses();

			setClasse(response);
		};

		fetchClasse();
	}, []);

	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">Grade de Horários</h1>
			</div>
			<SearchFilter />
			<ClassTable turmas={classe} />
		</div>
	);
};
