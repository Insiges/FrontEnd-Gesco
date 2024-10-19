import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogOverlay,
	DialogTitle,
} from "../ui/dialog";

// Criar, editar, excluir podem ser funções separadas dentro do modal
export function EditEventDialog({
	isOpen,
	closeDialog,
	selectedDay,
	formData,
	handleInputChange,
	handleSaveEvent,
	handleDeleteEvent,
	isEditing,
	error,
}) {
	return (
		<Dialog open={isOpen} onOpenChange={closeDialog}>
			<DialogOverlay className="fixed inset-0 bg-black bg-opacity-40" />

			<DialogContent
				className="bg-white rounded-lg shadow-lg max-w-[90%] sm:max-w-[400px] w-full p-6 mx-auto my-10"
				aria-describedby={undefined}
			>
				<div className="flex justify-between text-center items-center mb-2">
					<DialogTitle>
						{isEditing ? "Editar Evento" : "Criar Evento no Dia"}
					</DialogTitle>
					<strong className="p-2 rounded-full bg-blue-500 text-white">
						{selectedDay}
					</strong>
				</div>

				<div className="border-t border-blue-500 px-2 py-4 flex flex-col gap-2">
					<input
						className="outline-none p-1 shadow-md rounded-md"
						type="text"
						placeholder="Nome*"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
					/>
					<input
						className="outline-none p-1 shadow-md rounded-md"
						type="text"
						placeholder="Horário*"
						name="time"
						value={formData.time}
						onChange={handleInputChange}
					/>
					<textarea
						className="outline-none p-1 shadow-md rounded-md"
						name="description"
						cols="30"
						rows="5"
						placeholder="Descrição"
						value={formData.description}
						onChange={handleInputChange}
					></textarea>

					{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
				</div>

				<div className="flex justify-around gap-2">
					{isEditing && (
						<button
							type="button"
							onClick={handleDeleteEvent}
							className="w-[30%] px-2 py-1 bg-red-500 text-white rounded"
						>
							Excluir
						</button>
					)}
					<DialogClose asChild>
						<button
							type="button"
							className="w-[50%] px-2 py-1 bg-red-500 text-white rounded"
							onClick={closeDialog}
						>
							Cancelar
						</button>
					</DialogClose>
					<button
						type="button"
						onClick={handleSaveEvent}
						className="w-[50%] px-2 py-1 bg-green-500 text-white rounded"
					>
						{isEditing ? "Salvar" : "Criar"}
					</button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
