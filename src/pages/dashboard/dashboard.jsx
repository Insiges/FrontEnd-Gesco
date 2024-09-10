import {
	CalendarDashBoard,
	Counters,
	DocentTable,
	DonutChart,
	SchoolPerformanceChart,
} from "./components";

export function Dashboard() {
	return (
		<div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:h-max gap-x-8">
			<div className="grid gap-y-8">
				<div className="h-fit ">
					<Counters />
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
					<CalendarDashBoard />
				</div>
				<div className="bg-white shadow-xl rounded-lg p-6 ">
					<DonutChart />
				</div>
			</div>
		</div>
	);
}
