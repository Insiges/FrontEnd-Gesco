import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "../../components/ui/button";
import AddClassModal from "./components/AddModal/AddModal";
import { ClassTable, SearchFilter } from "./components/index";
import { useDeleteClasses } from "./hooks/useDeleteClasses";
import { useGetClasses } from "./hooks/useGetClasses";
import "react-toastify/dist/ReactToastify.css";

export const Classes = () => {
	const [showModalDelete, setShowModalDelete] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);
	const [idClass, setIdClass] = useState("");
	const { data: classes } = useGetClasses();
	const { mutateAsync: deleteClass } = useDeleteClasses();

	const handleDeletarClass = (id) => {
		setShowModalDelete(true);
		setIdClass(id);
	};

	const handleDeleteClassConfirm = async () => {
		await deleteClass(idClass, {
			onSuccess: () => {
				setShowModalDelete(false);
			},
		});
	};

	const closeModal = () => {
		setShowModalDelete(false);
		setError("");
	};

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
		}, 700); // Ajuste conforme necessário para o seu carregamento
	}, []);

	return (
		<div className="m-auto max-w-[1400px] p-4">
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
			<div className="grid gap-6">
				<div className="flex justify-between mx-4 items-center">
					<h1 className="text-3xl font-bold text-firstBlue">Turmas</h1>

					<Button onClick={() => setShowAddModal(true)} type="button">
						Adicionar Turma
					</Button>
				</div>
				{/* <SearchFilter /> */}

				<div>
					<div>
						<ClassTable
							turmas={classes}
							handleDelete={handleDeletarClass}
							boolean={true}
							teacher={true}
						/>
					</div>
					{showModalDelete && (
						<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
							<div className="bg-white max-h-96  w-[20%] min-w-64 p-3 rounded-lg shadow-lg">
								<div className="flex justify-between text-center items-center mb-2">
									<h2>Excluir Turma</h2>
								</div>
								<div className="flex justify-center gap-3">
									<button
										type="button"
										onClick={closeModal}
										className="w-[40%] px-2 py-1 bg-red-500 text-white rounded"
									>
										Cancelar
									</button>
									<button
										type="button"
										onClick={(e) => handleDeleteClassConfirm()}
										className="w-[40%] px-2 py-1 bg-green-500 text-white rounded"
									>
										Excluir
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			<AddClassModal
				isOpen={showAddModal}
				onClose={() => setShowAddModal(false)}
			/>
		</div>
	);
};
