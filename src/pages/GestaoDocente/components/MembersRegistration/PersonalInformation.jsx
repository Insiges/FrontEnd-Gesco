import { useEffect, useState } from "react";

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

	useEffect(() => {
		if (dadosPessoais) {
			setPersonData(dadosPessoais);
		}
	}, [dadosPessoais]);

	const handleOnChange = (field, value) => {
		setPersonData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<Flex>
			<Title fontSize={34} subTitle="Dados Pessoais">
				Adicionar Docentes
			</Title>

			<FormGuiaEtapas etapas={etapas} />

			<Flex direction="row" justify="start" className="flex-wrap p-2">
				<Flex style={{ flex: 1 }}>
					<Flex direction="row" justify="center" className="flex-wrap gap-2">
						<BoxView style={styles.fotoBox}>
							<input type="file" style={styles.photoInput} />
						</BoxView>

						{/* Nome e Sobrenome Row */}
						<Flex justify="start" className="flex-wrap gap-2">
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
								<label htmlFor="sobrenome">Sobrenome:</label>
								<input
									type="text"
									id="sobrenome"
									value={personData.sobrenome}
									onChange={(e) => handleOnChange("sobrenome", e.target.value)}
									className={inputClassName}
									required
								/>
							</Flex>
						</Flex>
					</Flex>

					{/* CEP and CPF Row */}
					<Flex direction="row" justify="center" className="flex-wrap gap-6">
						<Flex className="py-2">
							<label htmlFor="data-de-nascimento">Data de Nascimento:</label>
							<input
								type="date"
								id="data-de-nascimento"
								value={personData.nascimento}
								onChange={(e) => handleOnChange("nascimento", e.target.value)}
								className={inputClassName}
								style={{ maxWidth: 300 }}
								required
							/>
						</Flex>
						<Flex className="py-2">
							<label htmlFor="cpf">CPF:</label>
							<input
								type="text"
								id="cpf"
								value={personData.cpf}
								onChange={(e) => handleOnChange("cpf", e.target.value)}
								className={inputClassName}
								style={{ maxWidth: 300 }}
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
							<label htmlFor="endereco">Endereço:</label>
							<input
								type="text"
								id="endereco"
								value={personData.endereco}
								onChange={(e) => handleOnChange("endereco", e.target.value)}
								className={inputClassName}
								required
							/>
						</Flex>
						<Flex>
							<label htmlFor="cidade">Cidade:</label>
							<input
								type="text"
								id="cidade"
								value={personData.cidade}
								onChange={(e) => handleOnChange("cidade", e.target.value)}
								className={inputClassName}
								required
							/>
						</Flex>
					</Flex>

					{/* Right Nested Column */}
					<Flex justify="start" className="gap-2">
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
						<Flex>
							<label htmlFor="estado">Estado:</label>
							<input
								type="text"
								id="estado"
								value={personData.estado}
								onChange={(e) => handleOnChange("estado", e.target.value)}
								className={inputClassName}
								required
							/>
						</Flex>
						<Flex>
							<label htmlFor="cep">CEP:</label>
							<input
								type="text"
								id="cep"
								value={personData.cep}
								onChange={(e) => handleOnChange("cep", e.target.value)}
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
		backgroundImage:
			"url(https://archive.org/download/placeholder-image/placeholder-image.jpg)",
		backgroundSize: "cover",
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
