import { useState } from "react";
import { deleteClass, getClasses } from "../../services/api/class";
import { Button, ClassTable, SearchFilter } from "./components/index";
import { useGetClasses } from "./hooks/useGetClasses";

export const Classes = () => {
	const [showModalDelete, setShowModalDelete] = useState(false);
	const [idClass, setIdClass] = useState("");
	const { data: classes } = useGetClasses();

	const handleDeletarClass = (id) => {
		setShowModalDelete(true);
		setIdClass(id);
	};

	const handleDeleteClassConfirm = async () => {
		await deleteClass(idClass);

		setShowModalDelete(false);
		setTimeout(async () => {
			const response = await getClasses();
			setClasse(response);
		}, 2000);
	};

	const closeModal = () => {
		setShowModalDelete(false);
		setError("");
	};

	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">Turmas</h1>
				<Button />
			</div>
			<SearchFilter />
			<ClassTable turmas={classes} handleDelete={handleDeletarClass} />
			{showModalDelete && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white max-h-96  w-[20%] min-w-64 p-3 rounded-lg shadow-lg">
						<div className="flex justify-between text-center items-center mb-2">
							<h2>Excluir Turma</h2>
						</div>
						<div className="flex justify-center gap-3">
							<button
								type="button"
								onClick={closeModal}
								className="w-[40%] px-2 py-1 bg-red-500 text-white rounded"
							>
								Cancelar
							</button>
							<button
								type="button"
								onClick={(e) => handleDeleteClassConfirm()}
								className="w-[40%] px-2 py-1 bg-green-500 text-white rounded"
							>
								Excluir
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
