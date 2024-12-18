import dayjs from "dayjs";
import { MdDelete, MdGroups2 } from "react-icons/md";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDeleteStudentOnClass } from "../../hooks/useDeleteStudentOnClass";

export const StudentsTable = ({ students }) => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { mutateAsync: deleteStudentClass } = useDeleteStudentOnClass();
	const handleDelete = async (aluno) => {
		await deleteStudentClass({ aluno, turma: id });
	};

	const handleStudentClick = (id) => {
		navigate(`/classes/student/${id}`);
	};

	return (
		<div className="flex mx-4 justify-center rounded-lg shadow-lg border-firstBlue">
			{!students || (!!students && students.length <= 0) ? (
				<p className="text-center text-xl text-gray-500 py-4">
					Não há estudantes cadastrados
				</p>
			) : (
				<table className="table-fixed w-full h-full rounded-lg">
					<thead>
						<tr className="bg-firstBlue">
							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-tl-lg  text-white text-center">
								Nome
							</th>

							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Matricula
							</th>
							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Data de Nascimento
							</th>
							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-tr-lg  text-white text-center">
								Ação
							</th>
						</tr>
					</thead>

					<tbody>
						{students.map((student) => (
							<tr key={student.id} className="bg-white ">
								<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
									<div className="flex sm:ps-8 items-center justify-start">
										<MdGroups2 className="mr-2 hidden sm:block  align-middle" />
										<span
											className="inline-block align-middle cursor-pointer hover:underline"
											onClick={() => handleStudentClick(student.id)}
										>
											{student.nome}
										</span>
									</div>
								</td>

								<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
									{student.matricula}
								</td>
								<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
									{dayjs(student.dataNascimento).format("DD/MM/YYYY")}
								</td>
								<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
									<button
										type="button"
										className="text-red-400 hover:underline"
										onClick={() => handleDelete(student.id)}
									>
										<MdDelete />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};
