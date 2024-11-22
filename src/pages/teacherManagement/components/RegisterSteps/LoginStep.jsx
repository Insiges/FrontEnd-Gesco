import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BoxView, Button, Flex } from "../../../../components/ui";
import { inputClassName } from "../../const/classConst";
import "react-toastify/dist/ReactToastify.css";

const LoginStep = ({ dadosCadastrais, etapas, onSubmit, onPrevious }) => {
	const [loginData, setLoginData] = useState(dadosCadastrais);

	useEffect(() => {
		setLoginData(dadosCadastrais);
	}, [dadosCadastrais]);

	const handleSubmit = (e) => {
		onSubmit(e, loginData);
	};

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={3000} // O toast será fechado após 3 segundos
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="dark"
			/>
			<Flex direction="row" justify="center" className="flex-wrap gap-4">
				<Flex className="items-start">
					<BoxView className="p-8">
						<form onSubmit={handleSubmit}>
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
								<label htmlFor="password">Senha:</label>
								<input
									type="password"
									id="password"
									value={loginData.password}
									onChange={(e) =>
										setLoginData((prev) => ({
											...prev,
											password: e.target.value,
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
							<p className="bg-[#E7E7EC] text-[#060343] min-w-full rounded-t-md p-6">
								<strong>Revisar Dados Cadastrais</strong>
							</p>
							<div>
								{Object.entries(dadosCadastrais).map(([key, value]) => {
									if (key === "email" || key === "password") return null;
									if (
										key !== "disciplinas" &&
										key !== "diplomas" &&
										key !== "id_telefone" &&
										key !== "id_email" &&
										key !== "id_cidade" &&
										key !== "id_estado" &&
										key !== "nome_estado"
									) {
										return (
											<Flex
												key={key}
												direction="row"
												justify="between"
												className="p-3 odd:bg-white even:bg-[#f4f4f4]"
											>
												<Flex
													direction="row"
													justify="start"
													className="gap-12"
												>
													<p>
														<strong style={{ textTransform: "uppercase" }}>
															{key}
														</strong>
														: {!value ? "N/A" : value}
													</p>
												</Flex>
											</Flex>
										);
									}
								})}
							</div>
						</div>
					</BoxView>
				</Flex>
			</Flex>
		</>
	);
};

export default LoginStep;
