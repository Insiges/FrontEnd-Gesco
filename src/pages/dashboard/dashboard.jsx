import { useEffect, useState } from "react";

import { getCounters } from "../../services/api/school";

import useUserInfos from "../../stores/userStore";
import { useGetUserInfos } from "../login/hooks/useGetUserInfos";
import {
	Calendar,
	Counters,
	DocentTable,
	DonutChart,
	SchoolPerformanceChart,
} from "./components";

const events = [
	{ day: 3, eventName: "Meeting" },
	{ day: 8, eventName: "Class Presentation" },
	{ day: 20, eventName: "Workshop" },
	{ day: 25, eventName: "Holiday" },
];

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
		<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
			<div className="space-y-4">
				<div className="bg-white  rounded-lg p-4">
					<Counters counters={counters} />
				</div>
				<div className="bg-white rounded-lg p-4">
					<DocentTable />
				</div>
				<div className="bg-white shadow-xl rounded-lg p-6">
					<SchoolPerformanceChart />
				</div>
			</div>
			<div className="space-y-4">
				<div className="bg-white  rounded-lg p-6">
					<Calendar events={events} />
				</div>
				<div className="bg-white shadow-xl rounded-lg p-6">
					<DonutChart title="School Calendar" />
				</div>
			</div>
		</div>
	);
}
