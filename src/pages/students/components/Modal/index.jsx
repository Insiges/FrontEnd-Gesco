export const Modal = ({ show, close, confirm, title }) => {
	return show ? (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white max-h-96  w-[20%] min-w-64 p-3 rounded-lg shadow-lg">
				<div className="flex justify-between text-center items-center mb-2">
					<h2>{title}</h2>
				</div>
				<div className="flex justify-center gap-3">
					<button
						type="button"
						onClick={close}
						className="w-[40%] px-2 py-1 bg-red-500 text-white rounded"
					>
						Cancelar
					</button>
					<button
						type="button"
						onClick={confirm}
						className="w-[40%] px-2 py-1 bg-green-500 text-white rounded"
					>
						Excluir
					</button>
				</div>
			</div>
		</div>
	) : null;
};
