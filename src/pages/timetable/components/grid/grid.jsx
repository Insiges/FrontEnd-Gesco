export const Grid = ({ table }) => {
	return (
		<div>
			<div className="flex">
				<table className="table-auto border border-firstBlue justify-center rounded-lg">
					<thead>
						<tr>
							<th className="px-16 py-8">Time</th>
							<th className="px-16 py-8">Monday</th>
							<th className="px-16 py-8">Tuesday</th>
							<th className="px-16 py-8">Wednesday</th>
							<th className="px-16 py-8">Thursday</th>
							<th className="px-16 py-8">Friday</th>
						</tr>
					</thead>
					<tbody>
						{table.map((row, id) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<tr key={id}>
								{row.map((cell, id) => (
									<td
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={id}
										className="border border-firstBlue px-16 py-8"
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
