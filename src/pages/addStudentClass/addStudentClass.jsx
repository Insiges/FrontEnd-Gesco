import { AddStudentsTable, Button, SearchFilter } from "./components/index";

const students = [
	{
		id: Math.floor(Math.random() * 10000),
		name: "Alice Johnson",
		birthDate: "2005-04-12",
		class: "10A",
		phone: "123-456-7890",
		email: "alice.johnson@example.com",
		address: "123 Maple Street",
	},
	{
		id: Math.floor(Math.random() * 10000),
		name: "Bob Smith",
		birthDate: "2006-07-23",
		class: "10B",
		phone: "234-567-8901",
		email: "bob.smith@example.com",
		address: "456 Oak Avenue",
	},
	{
		id: Math.floor(Math.random() * 10000),
		name: "Charlie Brown",
		birthDate: "2005-11-30",
		class: "10C",
		phone: "345-678-9012",
		email: "charlie.brown@example.com",
		address: "789 Pine Road",
	},
	{
		id: Math.floor(Math.random() * 10000),
		name: "Diana Prince",
		birthDate: "2006-02-14",
		class: "10A",
		phone: "456-789-0123",
		email: "diana.prince@example.com",
		address: "101 Birch Lane",
	},
	{
		id: Math.floor(Math.random() * 10000),
		name: "Ethan Hunt",
		birthDate: "2005-09-18",
		class: "10B",
		phone: "567-890-1234",
		email: "ethan.hunt@example.com",
		address: "202 Cedar Street",
	},
	{
		id: Math.floor(Math.random() * 10000),
		name: "Fiona Gallagher",
		birthDate: "2006-05-25",
		class: "10C",
		phone: "678-901-2345",
		email: "fiona.gallagher@example.com",
		address: "303 Elm Avenue",
	},
	{
		id: Math.floor(Math.random() * 10000),
		name: "George Weasley",
		birthDate: "2005-12-01",
		class: "10A",
		phone: "789-012-3456",
		email: "george.weasley@example.com",
		address: "404 Spruce Road",
	},
	{
		id: Math.floor(Math.random() * 10000),
		name: "Hannah Montana",
		birthDate: "2006-08-19",
		class: "10B",
		phone: "890-123-4567",
		email: "hannah.montana@example.com",
		address: "505 Willow Lane",
	},
	{
		id: Math.floor(Math.random() * 10000),
		name: "Ian Malcolm",
		birthDate: "2005-03-22",
		class: "10C",
		phone: "901-234-5678",
		email: "ian.malcolm@example.com",
		address: "606 Redwood Street",
	},
	{
		id: Math.floor(Math.random() * 10000),
		name: "Jane Doe",
		birthDate: "2006-10-10",
		class: "10A",
		phone: "012-345-6789",
		email: "jane.doe@example.com",
		address: "707 Aspen Avenue",
	},
];

export const ClassesStudentsAdd = () => {
	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">
					Adicionar estudantes - Turma {"10A"}
				</h1>

				<Button />
			</div>
			<SearchFilter />
			<AddStudentsTable students={students} />
		</div>
	);
};
