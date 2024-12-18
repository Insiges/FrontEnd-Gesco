import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import notebookImage from "../../assets/login/pc.png";
import { useHasTokenInLocal } from "../../hooks/useHasTokenInLocal";
import { useHasTypeUser } from "../../hooks/useHasTypeUser";
import { useAuthStore } from "../../stores/authStore";
import { Header } from "../login/components/header/Header";
import { Roles } from "./components";
import { loginSchema } from "./form/loginSchema";
import { useSignIn } from "./hooks/useSignIn";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
	const [loginType, setLoginType] = useState("");
	const [credentialsError, setCredentialsError] = useState("");
	const navigate = useNavigate();

	const { hasToken } = useHasTokenInLocal();

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
	const { fetchUserInfos } = useHasTypeUser();

	const { logout } = useAuthStore();

	const { mutateAsync: signIn } = useSignIn();

	const handleSignIn = async (data) => {
		toast.loading("Logando");
		if (hasToken) logout();
		const dataWithRole = { ...data, role: loginType };
		await signIn(dataWithRole, {
			onSuccess: () => {
				fetchUserInfos();
				navigate("/dashboard");
			},
			onError: () => {
				setCredentialsError("Credenciais erradas!");
				reset();
				toast.error("Erro ao realizar login. Verifique suas credenciais.");
			},
		});
	};

	const handleRules = (data) => {
		setLoginType(data);
	};

	if (loginType === "") return <Roles setRole={handleRules} />;

	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="dark"
			/>
			<Header />
			<div className="flex flex-grow justify-center mt-14 gap-2 mx-auto">
				<div className="w-550px flex flex-col justify-center items-center bg-white p-4 mt-10 ">
					<h1 className="text-[#060273] text-[44px] font-bold mb-10">
						Bem-vindo!
					</h1>
					<form
						className="space-y-4 w-full max-w-sm"
						onSubmit={handleSubmit(handleSignIn)}
					>
						<input
							type="text"
							placeholder="Usuário"
							className="block w-full p-[6px] border border-[#504C4C] rounded-md"
							{...register("username")}
						/>
						{errors.username && (
							<p className="text-red-600 py-1">{errors.username.message}</p>
						)}

						<input
							type="password"
							placeholder="Senha"
							className="block w-full p-[6px] border border-[#504C4C] rounded-md"
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
