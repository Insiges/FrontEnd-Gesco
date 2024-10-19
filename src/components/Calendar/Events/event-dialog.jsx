import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateEvent } from "../../../pages/events/hooks/useCreateEvent";
import { useDeleteEvent } from "../../../pages/events/hooks/useDeleteEvent";
import { useGetEventsByDate } from "../../../pages/events/hooks/useGetEvents";
import { formatToBRLDate } from "../../../utils/formatDate";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogOverlay,
	DialogTitle,
} from "../../ui/dialog";
import { EventList } from "./events-list";
import { eventsSchema } from "./events-schema";

export function EventDialog({
	isOpen,
	closeDialog,
	selectedDay,
	error,
	currentlyClickedDate,
	// dayEvents,
}) {
	const { data: dayEvents } = useGetEventsByDate(currentlyClickedDate);
	const { mutate: createEvent } = useCreateEvent();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty, isValid },
	} = useForm({
		resolver: zodResolver(eventsSchema),
		mode: "onChange",
		defaultValues: {
			name: "",
			time: "",
			description: "",
		},
	});

	const handleCreateEvent = (data) => {
		const eventData = { ...data, currentlyClickedDate };
		createEvent(eventData, {
			onSuccess: () => {
				// closeDialog();
				reset();
			},
		});
	};

	const handleEdit = (event) => {
		reset({
			name: event.name,
			time: event.time,
			description: event.description,
		});
	};

	const generateTimeOptions = () => {
		const times = [];
		for (let i = 0; i < 24; i++) {
			const hour = String(i).padStart(2, "0");
			times.push(`${hour}:00`);
			times.push(`${hour}:30`);
		}
		return times;
	};

	const timeOptions = generateTimeOptions();

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => {
				if (!open) {
					reset();
					closeDialog();
				}
			}}
		>
			<DialogOverlay className="fixed inset-0 bg-black bg-opacity-60" />

			<DialogContent
				className="bg-white rounded-lg shadow-lg max-w-[90%] sm:max-w-[400px] w-full p-6 mx-auto my-10"
				aria-describedby={undefined}
			>
				<div className="flex justify-between text-center items-center mb-2">
					<DialogTitle>Criar Evento</DialogTitle>
					<strong className="p-2 rounded-full text-white">
						{formatToBRLDate(currentlyClickedDate)}
					</strong>
				</div>

				<form
					onSubmit={handleSubmit(handleCreateEvent)}
					className="border-t border-blue-500 px-2 py-4 flex flex-col gap-2"
				>
					<input
						className="outline-none p-1 shadow-md rounded-md"
						type="text"
						placeholder="Nome*"
						{...register("name")}
					/>
					<select
						className="outline-none p-1 shadow-md rounded-md"
						{...register("time")}
					>
						<option value="">Selecione o horário*</option>
						{timeOptions.map((time) => (
							<option key={time} value={time}>
								{time}
							</option>
						))}
					</select>

					<textarea
						className="outline-none p-1 shadow-md rounded-md"
						cols="30"
						rows="5"
						placeholder="Descrição"
						{...register("description")}
					></textarea>

					{/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}

					<div className="flex justify-around gap-2">
						{/* {isEditing && (
						<button
							type="button"
							onClick={handleDeleteEvent}
							className="w-[30%] px-2 py-1 bg-red-500 text-white rounded"
						>
							Excluir
						</button>
					)} */}
						<button
							type="submit"
							className="w-[50%] px-2 py-1 bg-green-500 text-white rounded disabled:cursor-not-allowed disabled:bg-green-300"
							disabled={!isDirty || !isValid}
						>
							{/* {isEditing ? "Salvar" : "Criar"}
							 */}
							Criar
						</button>
						<DialogClose asChild>
							<button
								type="button"
								className="w-[50%] px-2 py-1 bg-red-500 text-white rounded"
								onClick={closeDialog}
							>
								Cancelar
							</button>
						</DialogClose>
					</div>
				</form>
				{dayEvents?.length > 0 && (
					<div className="mt-4">
						<h3 className="text-lg font-bold mb-2 text-secondYellow">
							Eventos do Dia:
						</h3>
						<EventList
							events={dayEvents}
							currentlyClickedDate={currentlyClickedDate}
						/>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
