import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ClassTable, SearchFilter } from "./components/index";
import { useGetAllClasses } from "./hooks/useGetAllClasses";
import "react-toastify/dist/ReactToastify.css";

export const ClassesSchedule = () => {
	const { data: classe } = useGetAllClasses();

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
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-[#060343]">Grade de Horários</h1>
			</div>
			<SearchFilter />
			<ClassTable turmas={classe} />
		</div>
	);
};
