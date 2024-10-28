export const Button = ({ onSave }) => {
	return (
		<button
			onClick={onSave}
			type="button"
			className="bg-green-500 text-white rounded-md px-4 py-2"
		>
			Salvar Estudantes
		</button>
	);
};
