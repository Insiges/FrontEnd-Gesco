export function CalendarHeader({ title, currentDate, setCurrentDate }) {
	const prevMonth = () => {
		setCurrentDate(currentDate.subtract(1, "month"));
	};

	const nextMonth = () => {
		setCurrentDate(currentDate.add(1, "month"));
	};

	return (
		<div className="flex justify-between items-center mb-4">
			<h2 className="text-lg font-bold">{title}</h2>
			<div className="flex items-center space-x-4">
				<button
					type="button"
					onClick={prevMonth}
					className="p-2 text-gray-500 hover:text-black"
				>
					&lt;
				</button>
				<span className="text-lg font-semibold">
					{currentDate.format("MMMM YYYY")}
				</span>
				<button
					type="button"
					onClick={nextMonth}
					className="p-2 text-gray-500 hover:text-black"
				>
					&gt;
				</button>
			</div>
		</div>
	);
}
