export const StudentData = ({ studentData }) => {
	return (
		<div className="p-6 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-bold text-firstBlue mb-4">Dados do Aluno</h2>
			<div className="grid grid-cols-2 gap-4">
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">ID:</label>
					<input
						type="text"
						value={studentData.id}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Nome:</label>
					<input
						type="text"
						value={studentData.nome}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">CPF:</label>
					<input
						type="text"
						value={studentData.cpf}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">
						Data de Nascimento:
					</label>
					<input
						type="text"
						value={studentData.datanascimento}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Sexo:</label>
					<input
						type="text"
						value={studentData.sexo}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">
						Matrícula:
					</label>
					<input
						type="text"
						value={studentData.matricula}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">ID Email:</label>
					<input
						type="text"
						value={studentData.id_email}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Emails:</label>
					<input
						type="text"
						value={studentData.emails}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Telefone:</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">
						Logradouro:
					</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Bairro:</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">CEP:</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Cidade:</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">
						Nome do Estado:
					</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">
						Sigla do Estado:
					</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Número:</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">
						Complemento:
					</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">
						Responsáveis:
					</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Email:</label>
					<input
						type="text"
						value="N/A"
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
			</div>
		</div>
	);
};
