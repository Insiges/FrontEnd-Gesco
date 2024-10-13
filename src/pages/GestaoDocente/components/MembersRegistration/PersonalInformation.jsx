import { useEffect, useState } from "react";

import { getCep } from "../../../../services/api/viacep";
import {
	BoxView,
	Button,
	Flex,
	FormGuiaEtapas,
	Title,
	inputClassName,
} from "../../common";

const PersonalInformation = ({ dadosPessoais, etapas, onNext }) => {
	const [personData, setPersonData] = useState(dadosPessoais || {});
	const [cepData, setCepData] = useState({
		cep: "",
		logradouro: "",
		complemento: "",
		bairro: "",
		uf: "",
		estado: "",
		cidade: "",
	});

	useEffect(() => {
		if (dadosPessoais) {
			setPersonData(dadosPessoais);
		}
	}, [dadosPessoais]);

	const handleOnChange = (field, value) => {
		setPersonData((prev) => ({ ...prev, [field]: value }));
	};

	const cepOnChange = async (field, value) => {
		if (value.length > 7) {
			const cep = await getCep(value);

			setCepData({
				bairro: cep.bairro,
				cep: cep.cep,
				complemento: cep.complemento,
				logradouro: cep.logradouro,
				uf: cep.uf,
				estado: cep.estado,
				cidade: cep.localidade,
			});
		}

		setPersonData((prev) => ({ ...prev, [field]: value }));
	};

	useEffect(() => {
		setPersonData((prev) => ({ ...prev, cep: cepData.cep }));
		setPersonData((prev) => ({ ...prev, bairro: cepData.bairro }));
		setPersonData((prev) => ({ ...prev, logradouro: cepData.logradouro }));
		setPersonData((prev) => ({ ...prev, estado: cepData.uf }));
		setPersonData((prev) => ({ ...prev, cidade: cepData.cidade }));
	}, [cepData]);

	console.log(personData);

	return (
		<Flex>
			<Title fontSize={34} subTitle="Dados Pessoais">
				Adicionar Docentes
			</Title>

			<FormGuiaEtapas etapas={etapas} />

			<Flex direction="row" justify="start" className="flex-wrap p-2">
				<Flex style={{ flex: 1 }}>
					<Flex direction="row" justify="center" className="flex-wrap gap-2">
						<BoxView style={styles.fotoBox} className="mt-6">
							<input
								type="file"
								style={styles.photoInput}
								onChange={(event) => {
									const file = event.target.files[0];
									console.log(file);
									handleOnChange("foto", event.target.value);
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
									onChange={(e) => handleOnChange("nascimento", e.target.value)}
									className={inputClassName}
									required
								/>
							</Flex>
						</Flex>
					</Flex>

					{/* CEP and CPF Row */}

					<Flex
						direction="row"
						justify="center"
						className=" pl-1 flex-wrap gap-2"
					>
						<Flex>
							<label htmlFor="email">Sexo:</label>
							<select
								className={inputClassName}
								onChange={(e) => handleOnChange("sexo", e.target.value)}
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
							<label htmlFor="telefone">Telefone:</label>
							<input
								type="text"
								id="telefone"
								value={personData.telefone}
								onChange={(e) => handleOnChange("telefone", e.target.value)}
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
								value={personData.cep}
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
								value={cepData.bairro}
								onChange={(e) => handleOnChange("bairro", e.target.value)}
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
								value={cepData.estado}
								onChange={(e) => handleOnChange("estado", e.target.value)}
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
								value={personData.complemento}
								onChange={(e) => handleOnChange("complemento", e.target.value)}
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
								value={cepData.logradouro}
								onChange={(e) => handleOnChange("logradouro", e.target.value)}
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
								value={cepData.cidade}
								onChange={(e) => handleOnChange("cidade", e.target.value)}
								className={inputClassName}
								required
								disabled
							/>
						</Flex>
						<Flex>
							<label htmlFor="cidade">Numero:</label>
							<input
								type="text"
								id="cidade"
								value={personData.numero}
								onChange={(e) => handleOnChange("numero", e.target.value)}
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
