import { useState } from "react";

export const Modal = ({ closeModal }) => {
	const [turma, setTurma] = useState("");
	const [materia, setMateria] = useState("");
	const [horario, setHorario] = useState("");

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
			<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-bold">Formulário</h2>
					<button
						type="button"
						onClick={closeModal}
						className="text-gray-700 hover:text-gray-900"
					>
						&times;
					</button>
				</div>
				<form>
					<div className="mb-4">
						<label htmlFor="turma" className="block text-gray-700">
							Turma:
						</label>
						<input
							type="text"
							id="turma"
							name="turma"
							value={turma}
							onChange={(e) => setTurma(e.target.value)}
							required
							className="mt-1 block w-full px-3 py-2 border border-firstBlue rounded-md shadow-sm focus:outline-none focus:ring-firstBlue focus:border-firstBlue sm:text-sm"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="materia" className="block text-gray-700">
							Matéria:
						</label>
						<input
							type="text"
							id="materia"
							name="materia"
							value={materia}
							onChange={(e) => setMateria(e.target.value)}
							required
							className="mt-1 block w-full px-3 py-2 border border-firstBlue rounded-md shadow-sm focus:outline-none focus:ring-firstBlue focus:border-firstBlue sm:text-sm"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="horario" className="block text-gray-700">
							Horário:
						</label>
						<input
							type="time"
							id="horario"
							name="horario"
							value={horario}
							onChange={(e) => setHorario(e.target.value)}
							required
							className="mt-1 block w-full px-3 py-2 border border-firstBlue rounded-md shadow-sm focus:outline-none focus:ring-firstBlue focus:border-firstBlue sm:text-sm"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-firstBlue text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-firstBlue"
					>
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
};
