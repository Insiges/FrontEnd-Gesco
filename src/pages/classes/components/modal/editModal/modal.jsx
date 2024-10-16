import React, { useState } from "react";
import { MdClose } from "react-icons/md";

export const EditModal = ({ isOpen, onClose, turma, onSave }) => {
	const [editedTurma, setEditedTurma] = useState(turma);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedTurma({ ...editedTurma, [name]: value });
	};

	const handleSave = () => {
		onSave(editedTurma);
		onClose();
	};

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? "block" : "hidden"}`}
		>
			<div className="bg-white rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
				<div className="flex justify-between items-center bg-firstBlue p-4 rounded-t-lg">
					<h2 className="text-white text-lg">Editar Turma</h2>
					<button type="button" onClick={onClose} className="text-white">
						<MdClose size={24} />
					</button>
				</div>
				<form className="mx-4 mt-4">
					<div className="mb-4 ">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="nome"
						>
							Nome da Turma
						</label>
						<input
							type="text"
							id="nome"
							name="nome"
							value={editedTurma.nome}
							onChange={handleChange}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="serie"
						>
							Série
						</label>
						<input
							type="text"
							id="serie"
							name="serie"
							value={editedTurma.serie}
							onChange={handleChange}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="ano"
						>
							Ano Letivo
						</label>
						<input
							type="text"
							id="ano"
							name="ano"
							value={editedTurma.ano}
							onChange={handleChange}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="flex items-center justify-end mb-4 space-x-1">
						<button
							type="button"
							onClick={handleSave}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Salvar
						</button>
						<button
							type="button"
							onClick={onClose}
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Cancelar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
