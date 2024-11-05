import React, { useState } from "react";
import { MdDelete, MdGroups2 } from "react-icons/md";
import { useGetStudents } from "../../hooks/useGetStudents";

export const AddStudentsTable = ({ onSelectionChange }) => {
	const { data: students } = useGetStudents();
	const [selectedStudentIds, setSelectedStudentIds] = useState([]);
	const [selectAll, setSelectAll] = useState(false);

	const handleCheckboxChange = (id) => {
		setSelectedStudentIds((prevSelected) => {
			const newSelected = prevSelected.includes(id)
				? prevSelected.filter((studentId) => studentId !== id)
				: [...prevSelected, id];
			onSelectionChange(newSelected);
			return newSelected;
		});
	};

	const handleSelectAllChange = () => {
		setSelectAll((prevSelectAll) => {
			const newSelectAll = !prevSelectAll;
			const newSelectedStudentIds = newSelectAll
				? students.map((student) => student.id)
				: [];
			setSelectedStudentIds(newSelectedStudentIds);
			onSelectionChange(newSelectedStudentIds);
			return newSelectAll;
		});
	};

	return (
		<div className="flex mx-4 justify-center rounded-lg shadow-lg border-firstBlue">
			{!!students && students.length === 0 ? (
				<p className="text-center text-xl text-gray-500 py-4">
					Não há estudantes cadastrados
				</p>
			) : (
				<table className="table-fixed w-full h-full rounded-lg">
					<thead>
						<tr className="bg-firstBlue">
							<th className="w-1/12 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-tl-lg  text-white text-center">
								<input
									type="checkbox"
									checked={selectAll}
									onChange={handleSelectAllChange}
								/>
							</th>
							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Nome
							</th>
							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Matricula
							</th>
							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-tr-lg text-white text-center">
								Data de Nascimento
							</th>
						</tr>
					</thead>

					<tbody>
						{!!students &&
							students.length > 0 &&
							students.map((student) => (
								<tr key={student.id} className="bg-white ">
									<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center ">
										<input
											type="checkbox"
											checked={selectedStudentIds.includes(student.id)}
											onChange={() => handleCheckboxChange(student.id)}
										/>
									</td>
									<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
										<div className="flex sm:ps-8 items-center justify-start">
											<MdGroups2 className="mr-2 hidden sm:block  align-middle" />
											<span className="inline-block align-middle">
												{student.nome}
											</span>
										</div>
									</td>
									<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
										{student.matricula}
									</td>
									<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
										{student.dataNascimento}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default AddStudentsTable;
