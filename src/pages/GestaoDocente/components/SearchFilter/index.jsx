import React, { useState } from "react";

import { BoxView, Flex } from "../../common";

export const TableSearchFilter = ({
	label,
	placeholder,
	filtroParam1,
	filtroParam2,
	resultados,
	children,
}) => {
	const [filtro, setFiltro] = useState("");

	if (!filtroParam1 && !filtroParam2) {
		return children(resultados);
	}

	const resultadosConvertidos = resultados.map((resultado) =>
		Array.isArray(resultado[filtroParam2])
			? { ...resultado, [filtroParam2]: resultado[filtroParam2].join(" | ") }
			: resultado,
	);

	const resultadosFiltrados = resultadosConvertidos.filter(
		(resultado) =>
			(filtroParam1 &&
				resultado[filtroParam1]
					.toLowerCase()
					.includes(filtro?.toLowerCase())) ||
			(filtroParam2 &&
				resultado[filtroParam2].toLowerCase().includes(filtro?.toLowerCase())),
	);

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
			<div>{children(resultadosFiltrados, "outro argumento")}</div>
		</Flex>
	);
};
