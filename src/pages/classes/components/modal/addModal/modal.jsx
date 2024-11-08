import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { saveClass } from "../../../../../services/api/class";

const AddClassModal = ({ isOpen, onClose, onSave }) => {
	const [nome, setNome] = useState("");
	const [serie, setSerie] = useState("");
	const [ano, setAno] = useState("");

	const handleSave = async () => {
		const newClass = { nome, serie, ano };

		await saveClass(newClass);
		onClose();
		window.location.reload();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
				<div className="flex justify-between items-center bg-[#C5CFE4] p-4 rounded-t-lg">
					<h2 className="text-[#060343] font-semibold text-lg">
						Adicionar Nova Turma
					</h2>
					<button type="button" onClick={onClose} className="text-white">
						<MdClose size={24} />
					</button>
				</div>
				<div className="p-4">
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Nome da Turma
						</label>
						<input
							type="text"
							value={nome}
							onChange={(e) => setNome(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Série
						</label>
						<input
							type="text"
							value={serie}
							onChange={(e) => setSerie(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Ano Letivo
						</label>
						<input
							type="text"
							value={ano}
							onChange={(e) => setAno(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="flex justify-end">
						<button
							type="submit"
							onClick={handleSave}
							className="bg-custom-blue hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Salvar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddClassModal;
