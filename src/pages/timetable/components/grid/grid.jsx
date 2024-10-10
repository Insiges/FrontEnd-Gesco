export const Grid = ({ table }) => {
	return (
		<div className="flex flex-col w-full h-full">
			<div className="flex justify-center rounded-lg border-firstBlue w-full h-full">
				<table className="table-fixed w-full h-full rounded-lg">
					<thead>
						<tr className="bg-firstBlue">
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-tl-lg  text-white text-center">
								Time
							</th>
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Segunda
							</th>
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Terça
							</th>
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Quarta
							</th>
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Quinta
							</th>
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-tr-lg  text-white text-center">
								Sexta
							</th>
						</tr>
					</thead>
					<tbody>
						{table.map((row, rowIndex) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<tr key={rowIndex} className="w-full h-full">
								{row.map((cell, cellIndex) => (
									<td
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={cellIndex}
										className="w-1/6 border border-firstBlue px-2 py-1 md:px-16 md:py-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center"
									>
										{cell}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
