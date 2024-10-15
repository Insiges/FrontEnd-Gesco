import { Button, SearchFilter } from "./components/index";

export const Classes = () => {
	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">Turmas</h1>
				<Button />
			</div>
			<SearchFilter />
		</div>
	);
};
