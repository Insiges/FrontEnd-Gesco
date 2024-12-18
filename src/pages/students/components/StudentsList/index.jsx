import { useNavigate } from "react-router-dom";

import { TableSearchFilter } from "../SearchFilter";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BoxView, Button, Flex, Title } from "../../common";
import { deleteIcon, editIcon } from "../../common/icons";
import "react-toastify/dist/ReactToastify.css";

export const StudentsList = ({ students = [], onEdit, onDelete }) => {
	const navigate = useNavigate();
	useEffect(() => {
		const toastId = toast.loading("Carregando...");

		// Simule o carregamento de dados
		setTimeout(() => {
			toast.update(toastId, {
				render: "Carregamento concluído!",
				type: toast.success,
				isLoading: false, // Finaliza o carregamento
				autoClose: 500, // Fecha após 3 segundos
			});
		}, 1500); // Ajuste conforme necessário para o seu carregamento
	}, []);

	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={3000} // O toast será fechado após 3 segundos
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="dark"
			/>
			<Flex direction="row" className="p-4">
				<Title fontSize={24}>Estudantes</Title>
				<Button onClick={() => navigate("register")}>
					Adicionar Estudante
				</Button>
			</Flex>

			<TableSearchFilter
				label="Buscar Estudante"
				placeholder="Digite o nome ou a disciplina desejada…"
				data={students}
			>
				{(results) => (
					<BoxView>
						<div className="bg-[#E7E7EC]">
							<table className="min-w-full table-auto">
								<thead className="text-[#060343]">
									<tr>
										<th className="px-6 py-2">Estudante</th>
										<th className="px-6 py-2">Matricula</th>
										<th className="px-6 py-2">Turma</th>
										<th className="px-6 py-2">Ações</th>
									</tr>
								</thead>
								<tbody>
									{(Array.isArray(results)
										? results
										: results.content || []
									).map((student) => (
										<tr
											key={student.id}
											className="border-t text-center odd:bg-white even:bg-[#f4f4f4]"
										>
											<td className="py-3" style={{ width: "33%" }}>
												{student.nome}
											</td>
											<td className="py-3" style={{ width: "33%" }}>
												{student.matricula}
											</td>
											<td className="py-3" style={{ width: "33%" }}>
												{student.id_turma}
											</td>
											<td className="py-3" style={{ width: "33%" }}>
												<button
													className="text-blue-500 hover:underline mx-1"
													onClick={() => onEdit(student.id)}
													type="button"
												>
													{editIcon}
												</button>
												<button
													className="text-red-500 hover:underline mx-1"
													onClick={() => onDelete(student.id)}
													type="button"
												>
													{deleteIcon}
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							{results.length === 0 && (
								<Flex className="flex-col ">
									<p className="mt-4 text-center text-[#060343]">
										<strong>Nenhum estudante localizado.</strong>
									</p>
								</Flex>
							)}
						</div>
					</BoxView>
				)}
			</TableSearchFilter>
		</div>
	);
};

export default StudentsList;
