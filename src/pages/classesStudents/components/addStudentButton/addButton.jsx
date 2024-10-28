import { useNavigate } from "react-router-dom";

export const Button = ({ id }) => {
	const navigate = useNavigate();

	const addStudents = (id) => {
		navigate(`/Classes/${id}/students/add`);
	};

	return (
		<button
			onClick={() => addStudents(id)}
			type="button"
			className="bg-firstBlue text-white rounded-md px-4 py-2"
		>
			Adicionar Estudante
		</button>
	);
};
