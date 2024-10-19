import { Days } from "./calendar-days";

export function CalendarBody({ currentDate, today, events, onDayClick }) {
	const startOfMonth = currentDate.startOf("month");
	const endOfMonth = currentDate.endOf("month");
	const daysInMonth = endOfMonth.date();
	const startDay = startOfMonth.day();
	const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

	const emptyDays = Array.from({ length: startDay }).map((_, index) => (
		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
		<div key={index} className="text-center p-2" />
	));

	const days = Array.from({ length: daysInMonth }, (_, index) => {
		const day = index + 1;
		const isToday =
			currentDate.date() === day && currentDate.isSame(today, "month");
		const dia = String(day).padStart(2, "0");
		const mes = String(currentDate.$M + 1).padStart(2, "0");
		const hasEvent = events[`${currentDate.$y}-${mes}-${dia}`];

		return (
			<Days
				key={day}
				day={day}
				isToday={isToday}
				hasEvent={hasEvent}
				onDayClick={onDayClick}
			/>
		);
	});

	return (
		<div>
			<div className="grid grid-cols-7 gap-2 text-center text-gray-600 font-medium text-xs sm:text-base">
				{daysOfWeek.map((day) => (
					<div key={day} className="py-2">
						{day}
					</div>
				))}
			</div>

			<div className="grid grid-cols-10 gap-2 mt-4">
				{emptyDays}
				{days}
			</div>
		</div>
	);
}
