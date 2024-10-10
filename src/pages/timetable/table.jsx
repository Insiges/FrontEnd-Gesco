import { useState } from "react";
import { Grid, Modal, TitleClass } from "./components";

const sampleTableData = [
	["08:00", "Math", "English", "Science", "History", "PE"],
	["09:00", "Geography", "Math", "Art", "English", "Music"],
	["10:00", "Science", "History", "Math", "PE", "Geography"],
	["11:00", "English", "Science", "History", "Math", "Art"],
	["12:00", "PE", "Geography", "Music", "Science", "History"],
];

export const Timetable = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<TitleClass title="Truma 6° - B" />
			<Grid table={sampleTableData} />

			<button
				type="button"
				className="mt-4 w-32 bg-firstBlue text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
				onClick={() => setShowModal(true)}
			>
				Abrir Modal
			</button>
			{showModal && <Modal closeModal={() => setShowModal(false)} />}
		</div>
	);
};
