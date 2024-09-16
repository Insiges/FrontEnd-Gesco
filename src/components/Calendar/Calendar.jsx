import dayjs from "dayjs";
import React, { useState } from "react";

export default function Calendar({title}) {
	const today = dayjs();
	const [currentDate, setCurrentDate] = useState(today);

	const startOfMonth = currentDate.startOf("month");
	const endOfMonth = currentDate.endOf("month");
	const daysInMonth = endOfMonth.date();
	const startDay = startOfMonth.day();

	const prevMonth = () => {
		setCurrentDate(currentDate.subtract(1, "month"));
	};

	const nextMonth = () => {
		setCurrentDate(currentDate.add(1, "month"));
	};

	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const emptyDays = Array.from({ length: startDay }).map((_, index) => (
		<div
			key={`empty-${
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				index
			}`}
			className="text-center p-2"
		/>
	));

	const days = Array.from({ length: daysInMonth }, (_, index) => {
		const day = index + 1;
		const isToday =
			currentDate.date() === day && currentDate.isSame(today, "month");
		return (
			<div
				key={day}
				className={`text-center p-4 rounded-full cursor-pointer ${
					isToday ? "bg-blue-500 text-white" : "hover:bg-gray-200"
				}`}
			>
				{day}
			</div>
		);
	});

	return (
		<div className="w-full bg-white shadow-lg rounded-lg p-6">
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

			<div className="grid grid-cols-7 gap-4 text-center text-gray-600 font-medium">
				{daysOfWeek.map((day, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index}>{day}</div>
				))}
			</div>

			<div className="grid grid-cols-7 gap-4 mt-4">
				{emptyDays}
				{days}
			</div>
		</div>
	);
}
