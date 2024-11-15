import { ClassTable, SearchFilter } from "./components/index";
import { useGetAllClasses } from "./hooks/useGetAllClasses";

export const ClassesSchedule = () => {
	const { data: classe } = useGetAllClasses();

	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-[#060343]">Grade de Horários</h1>
			</div>
			<SearchFilter />
			<ClassTable turmas={classe} />
		</div>
	);
};
