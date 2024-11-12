import dayjs from "dayjs";

import { Link } from "react-router-dom";
import useUserInfos from "../../stores/userStore";
import { ActivitiesTable } from "../activities/components";
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

const currentlyMonth = dayjs().month();

export function Dashboard() {
	const { data: events } = useGetEventsByMonth(currentlyMonth + 1);
	// const { data: counters } = useGetCounters();
	const { userType } = useUserInfos();

	return (
		<div className="grid grid-cols-2 gap-2 h-[calc(100vh-8rem)] p-4">
			{userType !== "professor" && (
				<div className="h-full flex flex-col space-y-2">
					<div className="bg-white rounded-lg flex-grow h-[calc(50vh-2rem)]">
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
				<div className="h-[calc(50vh-2rem)] flex flex-col space-y-2">
					<div className="bg-white rounded-lg p-1 flex-grow">
						<Calendar events={events} />
					</div>
				</div>
			)}

			{userType === "professor" && (
				<div className="col-span-full grid grid-cols-2">
					<div className="h-1/2 w-full bg-white rounded-lg p-6">
						<ScheduleTeacher />
					</div>

					<div>
						<Link to={"/activities"} className="p-6">
							<ActivitiesTable />
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
