import dayjs from "dayjs";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useUserInfos from "../../stores/userStore";
import { ActivitiesTable } from "../activities/components";
import { useGetClassByProfessor } from "../activities/hooks/useGetClassByProfessor";
import { ClassTable } from "../classes/components";
import { useGetClasses } from "../classes/hooks/useGetClasses";
import {
	Calendar,
	Counters,
	DonutChart,
	ScheduleTeacher,
	SchoolPerformanceChart,
	TeachersTable,
} from "./components";
import { useGetCounters } from "./hooks/useGetCounters";
import { useGetEventsByMonth } from "./hooks/useGetEventsByMonth";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const currentlyMonth = dayjs().month();

export function Dashboard() {
	const { userType } = useUserInfos();
	const { data: events } = useGetEventsByMonth(currentlyMonth + 1);
	const { data: classes } =
		userType !== "professor" ? useGetClasses() : { data: null, isError: false };

	const { data: teacher, isError } =
		userType === "professor"
			? useGetClassByProfessor()
			: { data: null, isError: false };

	useEffect(() => {
		const toastId = toast.loading("Carregando...");

		// Simule o carregamento de dados
		setTimeout(() => {
			toast.update(toastId, {
				render: "Carregamento concluído!",
				type: toast.success,
				isLoading: false, // Finaliza o carregamento
				autoClose: 2500, // Fecha após 3 segundos
			});
		}, 2500); // Ajuste conforme necessário para o seu carregamento
	}, []);

	return (
		<div className="grid grid-cols-2 gap-2 h-[calc(100vh-8rem)] p-4">
			{userType !== "professor" && (
				<div className="h-full flex flex-col space-y-2">
					<div className="bg-white rounded-lg flex-grow max-h-80 mb-15">
						<Link to={"/docents"}>
							<TeachersTable />
						</Link>
					</div>
					<div className="bg-white rounded-lg flex-grow h-[calc(40vh-2rem)] ">
						<DonutChart title="School Calendar" />
					</div>
				</div>
			)}

			{userType !== "professor" && (
				<div className="">
					<div className="mb-8 max-h-80 overflow-y-hidden">
						<ClassTable turmas={classes} boolean={false} teacher={false} />
					</div>
					<div className="">
						<div className="bg-white rounded-lg p-1 flex-grow">
							<Calendar events={events} />
						</div>
					</div>
				</div>
			)}

			{userType === "professor" && (
				<div className="col-span-full grid grid-cols-2 ">
					<div className="h-1/2 w-full bg-white rounded-lg p-6">
						<ScheduleTeacher />
					</div>

					<div>
						<div className="mb-20 max-h-80 px-4">
							<Link to={"/activities"} className="p-6 ">
								<ActivitiesTable />
							</Link>
						</div>

						<div className="max-h-80">
							<ClassTable turmas={teacher} boolean={false} teacher={true} />
						</div>
					</div>
				</div>
			)}

			<ToastContainer
				position="top-right"
				autoClose={3000} // O toast será fechado após 3 segundos
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	);
}
