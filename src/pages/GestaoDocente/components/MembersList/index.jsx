import { useNavigate } from "react-router-dom";
import { BoxView, Button, Flex, Title } from "../../common";
import { deleteIcon, editIcon } from "../../common/icons";
import { TableSearchFilter } from "../SearchFilter";

export const MembersList = ({ docentes, onEditar, onDeletar }) => {
	const navigate = useNavigate();

	return (
		<div>
			<Flex direction="row" className="p-4">
				<Title fontSize={34}>Docentes</Title>
				<Button onClick={() => navigate("/gestao-docente/cadastro")}>
					Adicionar Docente
				</Button>
			</Flex>

			<TableSearchFilter
				label="Buscar Docente"
				placeholder="Digite o nome ou a disciplina desejada…"
				filtroParam1="nome"
				filtroParam2="disciplinas"
				resultados={docentes}
			>
				{(resultados) => (
					<BoxView>
						<div className="bg-blue-800">
							<table className="min-w-full table-auto">
								<thead className="text-white">
									<tr>
										<th className="px-6 py-2">Nome</th>
										<th className="px-6 py-2">Disciplina</th>
										<th className="px-6 py-2">Ações</th>
									</tr>
								</thead>
								<tbody>
									{resultados.map((docente) => (
										<tr
											key={docente.id}
											className="border-t text-center odd:bg-white even:bg-blue-50"
										>
											<td className="py-3" style={{ width: "33%" }}>
												{docente.nome}
											</td>
											<td className="py-3" style={{ width: "33%" }}>
												{typeof docente.disciplinas === "string"
													? docente.disciplinas
													: docente.disciplinas.join(" | ")}
											</td>
											<td className="py-3" style={{ width: "33%" }}>
												<button
													className="text-blue-500 hover:underline mx-1"
													onClick={() => onEditar(docente.id ?? "")}
													type="button"
												>
													{editIcon}
												</button>
												<button
													className="text-red-500 hover:underline mx-1"
													onClick={() => onDeletar(docente.id)}
													type="button"
												>
													{deleteIcon}
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							{resultados.length === 0 && (
								<Flex className="flex-col ">
									<p className="mt-4 text-center text-white">
										<strong>Nenhum docente localizado.</strong>
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

export default MembersList;
