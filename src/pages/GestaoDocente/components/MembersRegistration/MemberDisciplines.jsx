import React from "react";
import {
	Button,
	Flex,
	FormGuiaEtapas,
	Title,
	inputClassName,
} from "../../common";

const MemberDisciplines = ({
	disciplinas,
	etapas,
	onChange,
	onNext,
	onPrevious,
}) => (
	<Flex>
		<Flex>
			<Title fontSize={34} subTitle="Disciplinas Ministradas">
				Adicionar Docentes
			</Title>

			<FormGuiaEtapas etapas={etapas} />

			<Flex>
				<Flex
					direction="row"
					className="items-center gap-2"
					style={{ justifyContent: "center" }}
				>
					<input
						id="disciplinas-input"
						type="text"
						placeholder="Digite a nova disciplina"
						className={inputClassName}
					/>
					<Button
						onClick={async () => {
							await onChange((prev) => ({
								...prev,
								disciplinas: [
									...disciplinas,
									document.getElementById("disciplinas-input").value,
								],
							}));
							document.getElementById("disciplinas-input").value = "";
						}}
					>
						Adicionar Disciplina
					</Button>
				</Flex>

				<Flex>
					<h1 className="text-xl text-blue-900">Disciplinas</h1>
					<ul>
						{disciplinas.map((disciplina, index) => (
							<li key={index + disciplina}>
								<Flex
									direction="row"
									className="items-start gap-4"
									style={{ justifyContent: "start" }}
								>
									<h3>{disciplina}</h3>{" "}
									<button
										className="text-red-500 hover:underline"
										onClick={() => {}}
										type="button"
									>
										Remover
									</button>
								</Flex>
							</li>
						))}
					</ul>
				</Flex>
				<Flex
					direction="row"
					className="items-end gap-2 p-4"
					style={{ justifyContent: "flex-end" }}
				>
					<Button onClick={onPrevious}>Voltar</Button>
					<Button onClick={onNext}>Continuar</Button>
				</Flex>
			</Flex>
		</Flex>
	</Flex>
);

export default MemberDisciplines;
