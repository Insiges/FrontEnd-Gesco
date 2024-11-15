import dayjs from "dayjs";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useGetActivies } from "../hooks/useGetActivities";
import { ActivitiesDeleteDialog } from "./activities-delete-dialog";
import { DetailsActivitiesDialog } from "./details-activities-dialog";

export function ActivitiesTable() {
	const { data } = useGetActivies();
	const [selectedActivity, setSelectedActivity] = useState(null);
	const [activityId, setActivityId] = useState(null);
	const [showModalDeleteOpen, setShowModalDeleteOpen] = useState(false);
	const [showModalDetailsOpen, setShowModalDetailsOpen] = useState(false);

	// Função para abrir o modal e definir a atividade selecionada
	const openDetailsModal = (details) => {
		setSelectedActivity(details);
		setShowModalDetailsOpen(true);
	};

	const closeDetailsModal = () => {
		setSelectedActivity(null);
		setShowModalDetailsOpen(false);
	};

	const openDeleteModal = (id) => {
		setActivityId(id);
		setShowModalDeleteOpen(true);
	};

	const closeDeletesModal = () => {
		setActivityId(null);
		setShowModalDeleteOpen(false);
	};

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right text-[#030143]">
				<thead className="text-[17px] text-[#030143] font-semibold bg-[#C5CFE4]">
					<tr>
						<th scope="col" className="px-6 py-3">
							Nome
						</th>

						<th scope="col" className="px-6 py-3">
							Data de entrega
						</th>
						<th scope="col" className="px-6 py-3">
							Peso
						</th>
						<th scope="col" className="px-6 py-3"></th>
					</tr>
				</thead>
				<tbody>
					{data && data.length > 0 ? (
						data.map((activity) => (
							<tr
								key={activity.id}
								onClick={() => openDetailsModal(activity.descricao)}
								className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 cursor-pointer"
							>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{activity.nome}
								</th>

								<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{dayjs(activity.data_atividade).format("DD/MM/YYYY")}
								</td>
								<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{activity.valor}
								</td>
								<td className="px-6 py-4">
									<button
										type="button"
										onClick={(e) => {
											e.stopPropagation();
											openDeleteModal(activity.id);
										}}
									>
										<Trash2 className="text-gray-500 hover:text-red-500 " />
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td
								colSpan="5"
								className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
							>
								Você ainda não tem nenhuma atividade cadastrada
							</td>
						</tr>
					)}
				</tbody>
			</table>

			<DetailsActivitiesDialog
				isOpen={showModalDetailsOpen}
				onCloseDialog={closeDetailsModal}
				description={selectedActivity}
			/>
			<ActivitiesDeleteDialog
				isOpen={showModalDeleteOpen}
				onCloseDialog={closeDeletesModal}
				activityId={activityId}
			/>
		</div>
	);
}
