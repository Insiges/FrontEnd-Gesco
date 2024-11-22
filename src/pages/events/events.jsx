import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Calendar from "../../components/Calendar/Calendar";
import EventsTable from "../../components/EventsTable/EventsTable";
import "react-toastify/dist/ReactToastify.css";

export function Events() {
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
			<Calendar title="Calendario de Eventos" />
			<EventsTable />
		</div>
	);
}
