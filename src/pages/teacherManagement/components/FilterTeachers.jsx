import React, { useState } from "react";
import { BoxView, Flex } from "../../../components/ui";

export const FilterTeachers = ({
	label,
	placeholder,
	filtroParam1,
	filtroParam2,
	resultados,
	children,
}) => {
	const [filtro, setFiltro] = useState("");

	// Se os parâmetros de filtro não forem fornecidos, retorna todos os resultados
	if (!filtroParam1 && !filtroParam2) {
		return children(resultados);
	}

	// Conversão dos resultados para garantir que disciplinas seja uma string concatenada
	const resultadosConvertidos = resultados.map((resultado) => ({
		...resultado,
		[filtroParam2]: Array.isArray(resultado[filtroParam2])
			? resultado[filtroParam2]
					.map((disciplina) =>
						disciplina.nome ? disciplina.nome : JSON.stringify(disciplina),
					) // Acessa a propriedade nome, ou converte em string
					.join(" | ")
			: resultado[filtroParam2] || "Sem disciplinas", // Fallback caso não seja array
	}));

	// Filtragem dos resultados com verificação extra
	const resultadosFiltrados = resultadosConvertidos.filter((resultado) => {
		const filtroLower = filtro.toLowerCase();
		const filtro1Valido =
			filtroParam1 &&
			resultado.dados[filtroParam1] &&
			resultado.dados[filtroParam1].toLowerCase().includes(filtroLower);

		const filtro2Valido =
			filtroParam2 &&
			resultado[filtroParam2] &&
			resultado[filtroParam2].toLowerCase().includes(filtroLower);

		return filtro1Valido || filtro2Valido;
	});

	return (
		<Flex className="gap-12 p-4">
			<BoxView>
				<div className="bg-[#C5CFE4] text-[#060343] rounded-t-lg p-6">
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
