import React, { useState } from "react";
import { BoxView, Flex } from "../../common";

export const TableSearchFilter = ({
	label,
	placeholder,
	filterParam1,
	filterParam2,
	data,
	children,
}) => {
	const [filtro, setFiltro] = useState("");

	if (!filterParam1 && !filterParam2) {
		return children(data);
	}

	const resultadosFiltrados = [].filter((resultado) => {
		const filtroLower = filtro.toLowerCase();
		const filtro1Valido =
			filterParam1 &&
			resultado.dados[filterParam1] &&
			resultado.dados[filterParam1].toLowerCase().includes(filtroLower);

		const filtro2Valido =
			filterParam2 &&
			resultado[filterParam2] &&
			resultado[filterParam2].toLowerCase().includes(filtroLower);

		return filtro1Valido || filtro2Valido;
	});

	return (
		<Flex className="gap-12 p-4">
			<BoxView>
				<div className="bg-blue-800 text-white">
					<label htmlFor="filtro" className="text-lg font-bold p-4 my-4">
						{label}
					</label>
				</div>
				<div className="my-4 px-4">
					<input
						type="text"
						id="filtro"
						value={filtro}
						onChange={(ev) => setFiltro(ev.target.value)}
						placeholder={placeholder ?? "Busque aqui…"}
						className="w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
					/>
				</div>
			</BoxView>
			<div>{children(resultadosFiltrados)}</div>
		</Flex>
	);
};
