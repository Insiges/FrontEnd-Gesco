import { useState } from "react";
import AddClassModal from "../modal/addModal/modal"; // Certifique-se de ajustar o caminho conforme necessário

export const Button = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleSave = (newClass) => {
		// salvar a nova turma
		console.log("Nova turma adicionada:", newClass);
		setModalIsOpen(false);
	};

	return (
		<div>
			<button
				onClick={() => setModalIsOpen(true)}
				type="button"
				className="bg-custom-blue text-white rounded-md px-4 py-2"
			>
				Adicionar Turma
			</button>
			<AddClassModal
				isOpen={modalIsOpen}
				onClose={() => setModalIsOpen(false)}
				onSave={handleSave}
			/>
		</div>
	);
};
