import dayjs from "dayjs";
import React, { useState } from "react";

export default function Calendar({title}) {
	const today = dayjs();
	const [currentDate, setCurrentDate] = useState(today);
	const [selectedDay, setSelectedDay] = useState(null); 
    const [showModal, setShowModal] = useState(false);

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

	const handleDayClick = (day) => { 
        setSelectedDay(day); 
        setShowModal(true); 
    };

	const closeModal = () => { 
        setShowModal(false);
    };

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
				onClick={() => handleDayClick(day)}
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

			{showModal && (<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white h-[60%] w-[30%] p-3 rounded-lg shadow-lg">
						<div className="flex justify-between text-center items-center mb-2">
							<h2 className="">Criar Evento no Dia</h2>
							<strong className="p-2 rounded-full bg-blue-500 text-white">{selectedDay}</strong>
						</div>

						<div className="border-t border-blue-500 px-2 py-4 flex flex-col gap-2">
							<input className="outline-none p-1 shadow-md rounded-md" type="text" placeholder="Nome*" />
							<input className="outline-none p-1 shadow-md rounded-md" type="text" placeholder="Horario*" />
							<textarea className="outline-none p-1 shadow-md rounded-md" name="descrição" id="" cols="30" rows="5" placeholder="Descrição"></textarea>
						</div>

						<div className="flex justify-around gap-2">
							<button 
							type="button"
							onClick={closeModal} 
							className="w-[50%] px-2 py-1 bg-red-500 text-white rounded">
								Cancelar
							</button>
							<button 
							type="button"
							className="w-[50%] px-2 py-1 bg-green-500 text-white rounded">
								Salvar
							</button>
						</div>
                    </div>
                </div>
				
            )}
		</div>
	);
}
