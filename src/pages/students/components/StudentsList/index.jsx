import { useNavigate } from "react-router-dom";

import { TableSearchFilter } from "../SearchFilter";

import { BoxView, Button, Flex, Title } from "../../common";
import { deleteIcon, editIcon } from "../../common/icons";

export const StudentsList = ({ students = [], onEdit, onDelete }) => {
	const navigate = useNavigate();

	return (
		<div>
			<Flex direction="row" className="p-4">
				<Title fontSize={34}>Estudantes</Title>
				<Button onClick={() => navigate("/students/register")}>
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
						<div className="bg-blue-800">
							<table className="min-w-full table-auto">
								<thead className="text-white">
									<tr>
										<th className="px-6 py-2">Estudante</th>
										<th className="px-6 py-2">Matricula</th>
										<th className="px-6 py-2">Turma</th>
										<th className="px-6 py-2">Ações</th>
									</tr>
								</thead>
								<tbody>
									{results.map((student) => (
										<tr
											key={student.id}
											className="border-t text-center odd:bg-white even:bg-blue-50"
										>
											<td className="py-3" style={{ width: "33%" }}>
												{student.nome}
											</td>
											<td className="py-3" style={{ width: "33%" }}>
												{student.matricula}
											</td>
											<td className="py-3" style={{ width: "33%" }}>
												Missing Turma
											</td>
											<td className="py-3" style={{ width: "33%" }}>
												<button
													className="text-blue-500 hover:underline mx-1"
													onClick={() => onEdit(student.id ?? "")}
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
									<p className="mt-4 text-center text-white">
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
