import { useState } from "react";
import {
	BoxView,
	Button,
	Flex,
	FormStepsGuide,
	Title,
	inputClassName,
} from "../../common";

import { deleteIcon } from "../../common/icons";

const studentAffiliation = {
	nome: "",
	foto: "",
	cpf: "",
	data_nascimento: "",
	id_escola: 1, // @TODO - Hard coded aqui, não foi possível buscar na API resultado de escolas pra fazer escolha no form.
	sexo: "",
	email: "",
	telefone: "",
};

const StudentAffiliation = ({
	data,
	formSteps,
	onChange,
	onNext,
	onPrevious,
}) => {
	const [affiliationData, setAffiliationData] = useState(studentAffiliation);

	const handleOnChange = (vals) => {
		setAffiliationData((prev) => ({
			...prev,
			...vals,
		}));
	};

	return (
		<Flex>
			<Title fontSize={34} subTitle="Responsaveis">
				Adicionar Docentes
			</Title>

			<FormStepsGuide etapas={formSteps} />

			<Flex direction="row" justify="center" className="flex-wrap gap-4">
				<Flex>
					<BoxView className="p-8">
						<h1 className="text-center">Responsável</h1>
						<Flex className="mb-4">
							<label htmlFor="faculdade">Nome:</label>
							<input
								type="text"
								id="nome"
								value={affiliationData.nome}
								onChange={(e) => handleOnChange({ nome: e.target.value })}
								className={inputClassName}
							/>
						</Flex>
						<Flex className="mb-4">
							<label htmlFor="cursos">CPF:</label>
							<input
								type="text"
								id="cpf"
								value={affiliationData.curso}
								onChange={(e) => handleOnChange({ cpf: e.target.value })}
								className={inputClassName}
							/>
						</Flex>
						<Flex className="mb-4">
							<label htmlFor="sexo">Sexo:</label>
							<select
								className={inputClassName}
								onChange={(e) => handleOnChange({ sexo: e.target.value })}
								value={affiliationData.sexo}
								required
							>
								<option value="" disabled selected>
									Selecione uma opção
								</option>
								<option value="Feminino">Feminino</option>
								<option value="Masculino">Masculino</option>
							</select>
						</Flex>
						<Flex direction="row" className="mb-4">
							<Flex>
								<label htmlFor="data-de-nascimento">Data de Nascimento:</label>
								<input
									type="date"
									id="data-de-nascimento"
									value={affiliationData.nascimento}
									onChange={(e) =>
										handleOnChange({ data_nascimento: e.target.value })
									}
									className={inputClassName}
									style={{ maxWidth: 150 }}
									required
								/>
							</Flex>
							<Flex>
								<label htmlFor="telefone">Telefone:</label>
								<input
									type="text"
									id="telefone"
									value={affiliationData.telefone}
									onChange={(e) => handleOnChange({ telefone: e.target.value })}
									className={inputClassName}
									style={{ maxWidth: 150 }}
									required
								/>
							</Flex>
						</Flex>
						<Flex className="mb-4">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								value={affiliationData.email}
								onChange={(e) => handleOnChange({ email: e.target.value })}
								className={inputClassName}
								required
							/>
						</Flex>

						<Flex className="gap-2  my-4">
							<Button
								type="button"
								onClick={() =>
									onChange((prev) => ({
										...prev,
										responsaveis: [
											...prev.responsaveis,
											// @TODO - Esse hack no valor de 'foto' deve ser substituido pela real implementação
											{ ...affiliationData, foto: "any-value-here" },
										],
									}))
								}
							>
								Adicionar
							</Button>
						</Flex>
					</BoxView>
				</Flex>

				{/* Lista de formações */}
				<Flex className="flex-1">
					<BoxView>
						<div className=" rounded-md ">
							<div className="bg-blue-800 min-w-full rounded-md p-6">
								<p className="text-white">
									<strong>Responsáveis</strong>
								</p>
							</div>
							<div>
								{data.responsaveis.length ? (
									data.responsaveis.map((responsavel, index) => (
										<Flex
											key={`${responsavel.nome}-${index}`}
											direction="row"
											justify="between"
											className="p-6 odd:bg-white even:bg-blue-50"
										>
											<Flex direction="row" className="gap-12 w-full">
												<p>{responsavel.nome}</p>
												<p>{responsavel.telefone}</p>
												<button
													type="button"
													className="px-6"
													onClick={(e) => {
														e.preventDefault();
														onChange((prev) => ({
															...prev,
															responsaveis: data.responsaveis.filter(
																(_, i) => index !== i,
															),
														}));
													}}
												>
													{deleteIcon}
												</button>
											</Flex>
										</Flex>
									))
								) : (
									<Flex
										direction="row"
										justify="between"
										className="p-6 odd:bg-white even:bg-blue-50"
									>
										<p>Adicione algum responsável</p>
									</Flex>
								)}
							</div>
						</div>
					</BoxView>
					<Flex
						direction="row"
						className="gap-2 my-4"
						style={{ justifyContent: "flex-end" }}
					>
						<Button type="button" onClick={onPrevious}>
							Voltar
						</Button>
						<Button type="submit" onClick={onNext}>
							Continuar
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default StudentAffiliation;
