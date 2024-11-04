import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import notebookImage from "../../assets/login/pc.png";
import { ACCESS_TOKEN } from "../../consts/storageKeys";
import { removeStorage } from "../../services/storage/storage";
import { useAuthStore } from "../../stores/authStore";
import useUserInfos from "../../stores/userStore";
import { Header } from "../login/components/header/Header";
import { Roles } from "./components";
import { loginSchema } from "./form/loginSchema";
import { useGetUserInfos } from "./hooks/useGetUserInfos";
import { useSignIn } from "./hooks/useSignIn";

export function Login() {
	const [loginType, setLoginType] = useState("");
	const [credentialsError, setCredentialsError] = useState("");
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty, isValid },
	} = useForm({
		resolver: zodResolver(loginSchema),
		mode: "onChange",
		defaultValues: {
			username: "",
			password: "",
		},
	});
	const { setDados, setDisciplinas, setDiplomas, userType } = useUserInfos();
	const { data: userInfos } = useGetUserInfos(userType);

	const { mutateAsync: signIn } = useSignIn();

	const { isAuthenticated } = useAuthStore();

	const handleSignIn = async (data) => {
		const dataWIthRole = { ...data, role: loginType };
		await signIn(dataWIthRole, {
			onSuccess: () => {
				// if (userType === "professor") {
				// 	setDados(userInfos.dados);
				// 	setDiplomas(userInfos.diplomas);
				// 	setDisciplinas(userInfos.disciplinas);
				// }
				navigate("/dashboard");
			},
			onError: () => {
				setCredentialsError("Credencias erradas!");
				reset();
			},
		});
	};

	const handleRules = (data) => {
		setLoginType(data);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isAuthenticated) {
			removeStorage(ACCESS_TOKEN);
		}
	}, []);

	if (loginType === "") return <Roles setRole={handleRules} />;

	return (
		<div>
			<Header />
			<div className="flex flex-grow justify-center mt-14 gap-2 mx-auto">
				<div className="w-550px flex flex-col justify-center items-center bg-white p-4 mt-10 ">
					<h1 className="text-[#060273] text-4xl font-bold mb-10">Bem-vindo</h1>
					<form
						className="space-y-4 w-full max-w-sm"
						onSubmit={handleSubmit(handleSignIn)}
					>
						<input
							type="text"
							placeholder="Usuário"
							className="block w-full p-[6px] border border-black rounded-md"
							{...register("username")}
						/>
						{errors.username && (
							<p className="text-red-600 py-1">{errors.username.message}</p>
						)}

						<input
							type="password"
							placeholder="Senha"
							className="block w-full p-[6px] border border-black rounded-md"
							{...register("password")}
						/>
						{errors.password && (
							<p className="text-red-600 py-1">{errors.password.message}</p>
						)}

						<div className="flex justify-between items-center mt-4 ml-[200px]">
							<button type="button" className="text-sm text-[#504C4C]">
								Esqueceu a senha?
							</button>
						</div>

						<div className="w-full mt-4">
							<button
								type="submit"
								className="bg-custom-yellow text-[#060273] text-lg font-bold px-3 py-2 rounded-full w-full"
								disabled={!isDirty || !isValid}
							>
								Login
							</button>
						</div>
						<div className="p-4 self-center">
							<span className="text-red-500">
								{!!credentialsError && credentialsError}
							</span>
						</div>
					</form>
				</div>

				<div className="w-[600px] flex flex-col justify-center items-center">
					<img
						src={notebookImage}
						alt="notebook"
						className="w-390px h-auto max-h-[700px] mb-0"
					/>
					<p className="text-center text-[18px] mt-0">
						<span style={{ color: "#55679C" }}>
							Facilite e organize seu trabalho com eficiência usando o{" "}
						</span>
						<br />{" "}
						<span
							className="text-[20px] font-bold"
							style={{ color: "#030143" }}
						>
							GESCO
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
