import { useState } from "react";

import {
	BoxView,
	Button,
	Flex,
	FormStepsGuide,
	Title,
	inputClassName,
} from "../../common";

import { getCep } from "../../../../services/api/viacep";

const PersonalInformation = ({ data, formSteps, onNext }) => {
	const [personData, setPersonData] = useState(data);

	const handleOnChange = (field, value) => {
		setPersonData((prev) => ({ ...prev, [field]: value }));
	};

	const handleAddressChange = (field, value) => {
		setPersonData((prev) => ({
			...prev,
			endereco: { ...prev.endereco, [field]: value },
		}));
	};

	const cepOnChange = async (cepKey, cepValue) => {
		handleAddressChange(cepKey, cepValue);

		if (cepValue.length >= 8) {
			try {
				const cep = await getCep(cepValue);
				setPersonData((prev) => ({
					...prev,
					endereco: {
						...prev.endereco,
						logradouro: cep.logradouro,
						bairro: cep.bairro,
						cidade: cep.localidade,
						estado: cep.uf,
						complemento: cep.complemento,
					},
				}));
			} catch (error) {
				console.error("Error on CEP API", error);
			}
		}
	};

	return (
		<Flex>
			<Title fontSize={34} subTitle="Dados Pessoais">
				Adicionar Docentes
			</Title>

			<FormStepsGuide etapas={formSteps} />

			<Flex direction="row" justify="start" className="flex-wrap p-2">
				<Flex style={{ flex: 1 }}>
					<Flex direction="row" justify="center" className="flex-wrap gap-2">
						<BoxView style={styles.fotoBox} className="mt-6">
							<input
								type="file"
								style={styles.photoInput}
								onChange={(event) => {
									handleOnChange("foto", event.target.files[0]);
								}}
							/>
						</BoxView>

						{/* Nome e Sobrenome Row */}
						<Flex justify="start" className="flex-wrap gap-3 mb-5">
							<Flex>
								<label htmlFor="nome">Nome:</label>
								<input
									type="text"
									id="nome"
									value={personData.nome}
									onChange={(e) => handleOnChange("nome", e.target.value)}
									className={inputClassName}
									required
								/>
							</Flex>
							<Flex>
								<label htmlFor="cpf">CPF:</label>
								<input
									type="text"
									id="cpf"
									value={personData.cpf}
									onChange={(e) => handleOnChange("cpf", e.target.value)}
									className={inputClassName}
									required
								/>
							</Flex>
							<Flex className="">
								<label htmlFor="data-de-nascimento">Data de Nascimento:</label>
								<input
									type="date"
									id="data-de-nascimento"
									value={personData.nascimento}
									onChange={(e) =>
										handleOnChange("datanascimento", e.target.value)
									}
									className={inputClassName}
									required
								/>
							</Flex>
						</Flex>
					</Flex>

					{/* CEP and CPF Row */}
					<Flex justify="center">
						<Flex
							direction="row"
							justify="center"
							className="pl-1 flex-wrap gap-2"
						>
							<Flex>
								<label htmlFor="email">Sexo:</label>
								<select
									className={inputClassName}
									onChange={(e) => handleOnChange("sexo", e.target.value)}
									value={personData.sexo}
									required
								>
									<option value="" disabled selected>
										Selecione uma opção
									</option>
									<option value="Feminino">Feminino</option>
									<option value="Masculino">Masculino</option>
								</select>
							</Flex>
							<Flex className="">
								<label htmlFor="telefones">Telefone:</label>
								<input
									type="text"
									id="telefones"
									value={personData.telefone}
									onChange={(e) =>
										handleOnChange("telefones", [e.target.value])
									}
									className={inputClassName}
									required
								/>
							</Flex>
						</Flex>
						<Flex className="p-4 items-center 2xl:items-start">
							<label htmlFor="matricula">Matricula:</label>
							<input
								type="text"
								id="matricula"
								value={personData.matricula}
								onChange={(e) => handleOnChange("matricula", e.target.value)}
								className={inputClassName}
								required
							/>
						</Flex>
					</Flex>
				</Flex>

				{/* Right Column */}
				<Flex
					direction="row"
					justify="center"
					className="flex-wrap gap-2"
					style={{ flex: 1 }}
				>
					<Flex justify="start" className="gap-2">
						<Flex>
							<label htmlFor="cep">CEP:</label>
							<input
								type="text"
								id="cep"
								value={personData.endereco.cep}
								onChange={(e) => cepOnChange("cep", e.target.value)}
								className={inputClassName}
								required
							/>
						</Flex>
						<Flex>
							<label htmlFor="bairro">Bairro:</label>
							<input
								type="text"
								id="bairro"
								value={personData.endereco.bairro}
								onChange={(e) => handleAddressChange("bairro", e.target.value)}
								className={inputClassName}
								required
								disabled
							/>
						</Flex>
						<Flex>
							<label htmlFor="estado">Estado:</label>
							<input
								type="text"
								id="estado"
								value={personData.endereco.nome_estado}
								onChange={(e) => handleAddressChange("estado", e.target.value)}
								className={inputClassName}
								required
								disabled
							/>
						</Flex>
						<Flex>
							<label htmlFor="complemento">Complemento:</label>
							<input
								type="text"
								id="complemento"
								value={personData.endereco.complemento}
								onChange={(e) =>
									handleAddressChange("complemento", e.target.value)
								}
								className={inputClassName}
								required
							/>
						</Flex>
					</Flex>

					{/* Right Nested Column */}
					<Flex justify="start" className="gap-2">
						<Flex>
							<label htmlFor="endereco">Logradouro:</label>
							<input
								type="text"
								id="logradouro"
								value={personData.endereco.logradouro}
								onChange={(e) =>
									handleAddressChange("logradouro", e.target.value)
								}
								className={inputClassName}
								required
								disabled
							/>
						</Flex>

						<Flex>
							<label htmlFor="cidade">Cidade:</label>
							<input
								type="text"
								id="cidade"
								value={personData.endereco.cidade}
								onChange={(e) => handleAddressChange("cidade", e.target.value)}
								className={inputClassName}
								required
								disabled
							/>
						</Flex>
						<Flex>
							<label htmlFor="cidade">Numero:</label>
							<input
								type="text"
								id="numero"
								value={personData.endereco.numero}
								onChange={(e) => handleAddressChange("numero", e.target.value)}
								className={inputClassName}
								required
							/>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex direction="row" justify="center" className="w-full">
				<Button
					type="button"
					className="my-4"
					onClick={() => onNext(personData)}
				>
					Próxima Etapa
				</Button>
			</Flex>
		</Flex>
	);
};

const styles = {
	fotoBox: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundImage: "url(/src/assets/click.png)",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		width: "fit-content",
		height: 200,
	},
	photoInput: {
		opacity: 0,
		width: "100%",
		height: "100%",
		cursor: "pointer",
	},
};

export default PersonalInformation;
