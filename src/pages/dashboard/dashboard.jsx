import { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import { getCounters } from "../../services/api/school";
import {
	Counters,
	DocentTable,
	DonutChart,
	SchoolPerformanceChart,
} from "./components";
export function Dashboard() {
	const [counters, setCounter] = useState([]);

	useEffect(() => {
		async function fetchCounters() {
			try {
				const response = await getCounters();
				setCounter(response);
			} catch (error) {
				console.error("Erro ao buscar contadores:", error);
			}
		}

		fetchCounters();
	}, []);

	return (
		<div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:h-max gap-x-8">
			<div className="grid gap-y-8">
				<div className="h-fit ">
					<Counters counters={counters} />
				</div>
				<div className="">
					<DocentTable />
				</div>
				<div className="bg-white shadow-xl rounded-lg p-6">
					<SchoolPerformanceChart />
				</div>
			</div>
			<div className="grid gap-y-8">
				<div className="">
					<Calendar />
				</div>
				<div className="bg-white shadow-xl rounded-lg p-6 ">
					<DonutChart title="School Calendar" />
				</div>
			</div>
		</div>
	);
}
