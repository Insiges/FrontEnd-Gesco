import { Grid, TitleClass } from "./components";

const sampleTableData = [
	["08:00", "Math", "English", "Science", "History", "PE"],
	["09:00", "Geography", "Math", "Art", "English", "Music"],
	["10:00", "Science", "History", "Math", "PE", "Geography"],
	["11:00", "English", "Science", "History", "Math", "Art"],
	["12:00", "PE", "Geography", "Music", "Science", "History"],
];

export const Timetable = () => {
	return (
		<div>
			<TitleClass title="Truma 6° - B" />
			<Grid table={sampleTableData} />
		</div>
	);
};
