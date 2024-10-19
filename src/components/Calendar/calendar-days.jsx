import React from "react";

export function Days({ day, hasEvent, isToday, onDayClick }) {
	return (
		<div
			data-testid={`day-${day}`}
			className={`aspect-square min-w-[40px] sm:min-w-[80px] lg:min-w-[120px]
				flex flex-col justify-center items-center
				p-3 rounded-lg cursor-pointer transition-all duration-200
				${isToday ? "bg-blue-500 text-white" : "hover:bg-gray-200"}
				${hasEvent ? "border-2 border-green-500" : ""}`}
			onClick={() => onDayClick(day)}
			role="button"
			aria-pressed={isToday}
		>
			<span className="text-xl sm:text-2xl lg:text-3xl">{day}</span>
			{hasEvent && (
				<div className="mt-1 w-2 h-2 bg-green-500 rounded-full mx-auto"></div>
			)}
		</div>
	);
}
