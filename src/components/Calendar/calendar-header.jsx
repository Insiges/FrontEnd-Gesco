import { ChevronLeft, ChevronRight } from "lucide-react";

export function CalendarHeader({ title, currentDate, setCurrentDate }) {
	const prevMonth = () => {
		setCurrentDate(currentDate.subtract(1, "month"));
	};

	const nextMonth = () => {
		setCurrentDate(currentDate.add(1, "month"));
	};

	return (
		<div className="flex flex-col lg:gap-0 gap-2 lg:flex-row justify-between items-center mb-4">
			<h2 className="text-3xl text-firstBlue font-bold">{title}</h2>
			<div className="flex items-center space-x-4 border border-blue-800 rounded-md">
				<button
					type="button"
					onClick={prevMonth}
					className="p-2 text-gray-500 hover:text-black"
				>
					<ChevronLeft color="#1e40af" />
				</button>
				<span className="text-lg font-semibold text-navyBlue">
					{currentDate.format("MMMM YYYY")}
				</span>
				<button
					type="button"
					onClick={nextMonth}
					className="p-2 text-gray-500 hover:text-black"
				>
					<ChevronRight color="#1e40af" />
				</button>
			</div>
		</div>
	);
}
