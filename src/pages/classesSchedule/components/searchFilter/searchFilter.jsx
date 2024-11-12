export const SearchFilter = () => {
	return (
		<div>
			<div className="gap-12 p-4">
				<div>
					<div className="flex bg-[#C5CFE4] text-[#060343] h-16 rounded-t-lg items-center">
						<label htmlFor="filtro" className="text-lg font-semibold p-8 my-4">
							Filtro
						</label>
					</div>
					<form className="flex flex-col sm:flex-row p-8 space-y-4 sm:space-y-0 sm:space-x-8 shadow-lg shadow-t-none items-center">
						<input
							type="text"
							id="filtro"
							placeholder="Turma"
							className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
						/>
						<input
							type="number"
							id="filtro"
							placeholder="Ano letivo"
							className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
						/>
						<button
							type="submit"
							className="w-full sm:w-auto px-4 py-2 bg-custom-blue text-white rounded-md hover:opacity-80"
						>
							Buscar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
