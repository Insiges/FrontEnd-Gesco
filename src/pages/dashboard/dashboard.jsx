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
	const { data: counters } = useGetCounters();
	const { userType } = useUserInfos();

	return (
		<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3">
			<div className="space-y-2">
				<div className="bg-white rounded-lg w-[600px]">
					{userType !== "professor" && <Counters counters={counters} />}
					{userType === "professor" && (
						<Link to={"/activities"}>
							<ActivitiesTable />
						</Link>
					)}
				</div>
				<div className="bg-white rounded-lg w-[600px]">
					<Link to={"/docents"}>
						<TeachersTable />
					</Link>
				</div>
				{userType !== "professor" && (
					<div className="lg:grid lg:grid-cols-2 gap-4 ">
						<div className="bg-white w-[340px]  rounded-lg p-4">
							<SchoolPerformanceChart />
						</div>
						<div className="bg-white w-[220px] rounded-lg p-4 ml-[65px]">
							<DonutChart title="School Calendar" />
						</div>
					</div>
				)}
			</div>

			<div className="space-y-2 w-full lg:max-w-sm lg:mx-auto">
				{userType !== "professor" && (
					<div className="bg-white rounded-lg p-4">
						<Calendar events={events} />
					</div>
				)}
				{/* {userType !== "professor" && (
					<div className="bg-white shadow-xl rounded-lg p-6">
						<DonutChart title="School Calendar" />
					</div>
				)} */}
			</div>

			{userType === "professor" && (
				<div className="lg:col-span-2 w-full bg-white">
					<Link to={"/classesSchedule"}>
						<ScheduleTeacher />
					</Link>
				</div>
			)}
		</div>
	);
}
