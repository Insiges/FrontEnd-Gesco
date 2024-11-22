import dayjs from "dayjs";
import { useState } from "react";

export const StudentData = ({ studentData }) => {
	const [student, setStudent] = useState(studentData);

	return (
		<div className="p-6 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-bold text-firstBlue mb-4">Dados do Aluno</h2>
			<div className="grid grid-cols-2 gap-4">
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Nome:</label>
					<input
						type="text"
						value={student.aluno.nome}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
						disabled
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">CPF:</label>
					<input
						type="text"
						value={studentData.aluno.cpf}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
						disabled
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">
						Data de Nascimento:
					</label>
					<input
						type="text"
						value={dayjs(student.aluno.dataNascimento).format("DD/MM/YYYY")}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
						disabled
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Sexo:</label>
					<input
						type="text"
						value={studentData.aluno.sexo.nome}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
						disabled
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">
						Matrícula:
					</label>
					<input
						type="text"
						value={studentData.aluno.matricula}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
						disabled
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Emails:</label>
					<input
						type="text"
						value={studentData.aluno.emails[0].email}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
						disabled
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Telefone:</label>
					<input
						type="text"
						value={studentData.aluno.telefones[0].telefone}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
						disabled
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">
						Logradouro:
					</label>
					<input
						type="text"
						value={studentData.aluno.enderecos[0].logradouro}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Bairro:</label>
					<input
						type="text"
						value={studentData.aluno.enderecos[0].bairro}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">CEP:</label>
					<input
						type="text"
						value={studentData.aluno.enderecos[0].cep}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Cidade:</label>
					<input
						type="text"
						value={studentData.aluno.enderecos[0].cidade.nome}
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
						value={studentData.aluno.enderecos[0].cidade.estado.nome}
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
						value={studentData.aluno.enderecos[0].cidade.estado.sigla}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold">Número:</label>
					<input
						type="text"
						value={studentData.aluno.enderecos[0].numero}
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
						value={studentData.aluno.enderecos[0].complemento}
						readOnly
						className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
					/>
				</div>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 font-semibold  pb-2">
					Responsáveis:
				</label>
				{studentData.responsaveis.map((responsavel) => {
					return (
						<div key={responsavel.id} className="w-5/12">
							<div className="mb-4">
								<label className="block text-gray-700 font-semibold">
									Nome:
								</label>
								<input
									type="text"
									value={responsavel.nome}
									readOnly
									className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
								/>
							</div>

							<div className="mb-4">
								<label className="block text-gray-700 font-semibold">
									Email:
								</label>
								<input
									type="text"
									value={responsavel.email}
									readOnly
									className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
								/>
							</div>

							<div className="mb-4">
								<label className="block text-gray-700 font-semibold">
									Telefone:
								</label>
								<input
									type="text"
									value={responsavel.telefone}
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
									value={dayjs(responsavel.dataNascimento).format("DD/MM/YYYY")}
									readOnly
									className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700 font-semibold">
									Sexo:
								</label>
								<input
									type="text"
									value={responsavel.sexo.nome}
									readOnly
									className="block w-full p-2 border border-gray-300 rounded-md text-gray-900 bg-gray-100"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
