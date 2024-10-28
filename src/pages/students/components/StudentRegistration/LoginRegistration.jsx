import { useState } from "react";
import {
	BoxView,
	Button,
	Flex,
	FormStepsGuide,
	Title,
	inputClassName,
} from "../../common";
import { StudentInfoOverview } from "../StudentInfoOverview";

const LoginRegistration = ({ data, formSteps, onSubmit, onPrevious }) => {
	const [loginData, setLoginData] = useState(data);

	return (
		<Flex>
			<Flex>
				<Title fontSize={34} subTitle="Cadastro de Login">
					Adicionar Docentes
				</Title>

				<FormStepsGuide etapas={formSteps} />

				<Flex direction="row" justify="center" className="flex-wrap gap-4">
					<Flex className="items-start">
						<BoxView className="p-8">
							<form
								onSubmit={(ev) => {
									ev.preventDefault();
									onSubmit(loginData);
								}}
							>
								<Flex className="my-4">
									<label htmlFor="email">Email:</label>
									<input
										type="email"
										id="email"
										value={loginData.email}
										onChange={(e) =>
											setLoginData((prev) => ({
												...prev,
												email: e.target.value,
											}))
										}
										required
										className={inputClassName}
									/>
								</Flex>
								<Flex className="my-8">
									<label htmlFor="senha">Senha:</label>
									<input
										type="password"
										id="senha"
										value={loginData.password}
										onChange={(e) =>
											setLoginData((prev) => ({
												...prev,
												senha: e.target.value,
											}))
										}
										required
										className={inputClassName}
									/>
								</Flex>

								<Flex className="gap-2  my-4">
									<Button type="button" onClick={onPrevious}>
										Voltar
									</Button>
									<Button type="submit">Concluir Cadastro</Button>
								</Flex>
							</form>
						</BoxView>
					</Flex>

					{/* Revisao dos Dados */}
					<Flex className="flex-1">
						<BoxView>
							<div>
								<p className="bg-blue-500 text-white min-w-full rounded-t-md p-6">
									<strong>Revisar Dados Cadastrais</strong>
								</p>
								<div>{Object.entries(data).map(StudentInfoOverview)}</div>
							</div>
						</BoxView>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default LoginRegistration;
