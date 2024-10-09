import React, { useState } from "react";

export const Grid = ({ table }) => {
	return (
		<div className="flex flex-col w-full h-full">
			<div className="flex justify-center overflow-hidden rounded-lg border border-firstBlue w-full h-full">
				<table className="table-auto w-full h-full rounded-lg ">
					<thead>
						<tr className=" bg-firstBlue">
							<th className="px-16 py-8 text-white">Time</th>
							<th className="px-16 py-8 text-white">Monday</th>
							<th className="px-16 py-8 text-white">Tuesday</th>
							<th className="px-16 py-8 text-white">Wednesday</th>
							<th className="px-16 py-8 text-white">Thursday</th>
							<th className="px-16 py-8 text-white">Friday</th>
						</tr>
					</thead>
					<tbody>
						{table.map((row, id) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<tr key={id} className="w-full h-full">
								{row.map((cell, id) => (
									<td
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={id}
										className="border border-firstBlue px-16 py-8 w-full h-full"
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
