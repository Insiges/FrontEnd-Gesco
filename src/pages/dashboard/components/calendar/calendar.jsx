import React, { useState } from "react";

// TODO
// Armazenar infos de mês e dias numa variavel global
// Pegar infos de eventos na variavel global

export function Calendar({ events }) {
	const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
	const today = new Date();

	const [currentMonth, setCurrentMonth] = useState(today.getMonth());
	const [currentYear, setCurrentYear] = useState(today.getFullYear());

	// Função para obter o número de dias em um mês
	const getDaysInMonth = (month, year) => {
		return new Date(year, month + 1, 0).getDate();
	};

	// Obtém o primeiro dia do mês (0 = domingo, 1 = segunda, etc)
	const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

	// Total de dias no mês
	const daysInMonth = getDaysInMonth(currentMonth, currentYear);

	// Função para verificar se um dia tem eventos
	const hasEvent = (day) => {
		const eventDay = events.find((event) => event.day === day);
		return !!eventDay; // Retorna true se houver evento no dia
	};

	const renderDays = () => {
		const days = [];

		// Renderiza dias vazios antes do primeiro dia do mês
		for (let i = 0; i < firstDayOfMonth; i++) {
			days.push(<div key={`empty-${i}`} className="p-2" />);
		}

		// Renderiza os dias do mês
		for (let day = 1; day <= daysInMonth; day++) {
			const isToday =
				today.getDate() === day &&
				today.getMonth() === currentMonth &&
				today.getFullYear() === currentYear;

			days.push(
				<div
					key={day}
					className={`flex flex-col place-content-center p-4 text-center relative rounded-lg cursor-pointer transition-all duration-200 ${
						isToday ? "bg-blue-500 text-white" : "hover:bg-gray-100"
					}`}
				>
					{day}
					{hasEvent(day) && (
						<div className="w-2 h-2 mb-1 bg-green-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div> // Indicador de evento
					)}
				</div>,
			);
		}

		return days;
	};

	// Função para avançar um mês
	const nextMonth = () => {
		if (currentMonth === 11) {
			setCurrentMonth(0);
			setCurrentYear(currentYear + 1);
		} else {
			setCurrentMonth(currentMonth + 1);
		}
	};

	// Função para voltar um mês
	const prevMonth = () => {
		if (currentMonth === 0) {
			setCurrentMonth(11);
			setCurrentYear(currentYear - 1);
		} else {
			setCurrentMonth(currentMonth - 1);
		}
	};

	const getMonthName = (month) => {
		return new Date(currentYear, month).toLocaleString("default", {
			month: "long",
		});
	};

	return (
		<div className="w-full p-4 sm:p-10 bg-white shadow-md rounded-lg">
			<h2 className="text-lg font-bold text-center mb-4">Calendário</h2>
			<div className="flex justify-between items-center mb-4">
				<button
					type="button"
					onClick={prevMonth}
					className="p-2 bg-gray-200 rounded-full"
				>
					&lt;
				</button>
				<h2 className="text-lg font-bold text-center">
					{getMonthName(currentMonth)} {currentYear}
				</h2>
				<button
					type="button"
					onClick={nextMonth}
					className="p-2 bg-gray-200 rounded-full"
				>
					&gt;
				</button>
			</div>
			<div className="grid grid-cols-7 text-center font-medium text-gray-500">
				{daysOfWeek.map((day) => (
					<div key={day} className="p-2">
						{day}
					</div>
				))}
			</div>
			<div className="grid grid-cols-7 gap-2 mt-2">{renderDays()}</div>
		</div>
	);
}
