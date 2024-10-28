export const Button = () => {
	return (
		<button
			onClick={() => goToStudentAdd()}
			type="button"
			className="bg-firstBlue text-white rounded-md px-4 py-2"
		>
			Adicionar Estudante
		</button>
	);
};
