import React, { useId, useState } from "react";
import { useNavigate, useNavigation } from "react-router";
import notebookImage from "../../assets/login/pc.png";

import { useAuth } from "../../contexts/AuthContext";
import { Header } from "../login/components/header/Header";
import { Roles } from "./components/roles/Roles";

export function Login() {
	const [errors, setErrors] = useState({
		password: false,
		username: false,
		message: "",
	});
	const [errorCredentials, setErrorCredentials] = useState(false);
	const [loginType, setLoginType] = useState("");
	const id = useId();
	const navigate = useNavigate();
	const { login } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const { username, password } = Object.fromEntries(formData.entries());
		if (!username || !password) {
			!username
				? setErrors({
						password: false,
						username: true,
						message: "Preencha o Email",
					})
				: setErrors({
						password: true,
						username: false,
						message: "Preencha a Senha",
					});

			return;
		}

		login(
			{ username, password },
			loginType,
			() => {
				setErrorCredentials(true);
			},
			() => {
				navigate("/dashboard");
			},
		);
	};

	const resetErrors = () => {
		setErrors({ message: "", password: false, username: false });
	};

	const handleRules = (data) => {
		console.log("", data);
		setLoginType(data);
	};

	if (loginType === "") return <Roles setRole={handleRules} />;

	console.log({ loginType });
	return (
		<div>
			<Header />
			<div className="flex flex-grow justify-center mt-14 gap-2 mx-auto">
				<div className="w-550px flex flex-col justify-center items-center bg-white p-4 mt-10 ">
					<h1 className="text-[#060273] text-4xl font-bold mb-10">
						Bem-vindo de volta!
					</h1>
					<form
						className="space-y-4 w-full max-w-sm"
						id={id}
						onSubmit={handleSubmit}
					>
						<input
							type="text"
							placeholder="Username"
							className="block w-full p-[6px] border border-black rounded-full"
							name="username"
							onFocus={resetErrors}
						/>
						{errors.username && (
							<p className="text-red-600 py-1">{errors.message}</p>
						)}
						<input
							type="password"
							placeholder="Password"
							className="block w-full p-[6px] border border-black rounded-full"
							name="password"
							onFocus={resetErrors}
						/>
						{errors.password && (
							<p className="text-red-600 py-1">{errors.message}</p>
						)}
					</form>
					{errorCredentials && (
						<p className="text-red-600 py-1">Credenciais erradas</p>
					)}
					<div className="flex justify-between items-center mt-4 ml-[200px]">
						<button
							type="button"
							className="text-sm text-[#504C4C]"
							onClick={() => {}}
						>
							Esqueceu a senha?
						</button>
					</div>
					<div className="w-full mt-4">
						<button
							type="submit"
							className="bg-custom-yellow text-[#060273] text-lg font-bold px-3 py-2 rounded-full w-full"
							form={id}
						>
							Login
						</button>
						<div className="flex items-center justify-center space-x-4 mt-4 mb-4">
							<div className="flex-grow border-t border-[#504C4C]" />{" "}
							<p className="text-[#504C4C] mx-4">ou continue com</p>{" "}
							<div className="flex-grow border-t border-[#504C4C]" />{" "}
						</div>
						<div className="flex flex-col items-center mt-2 mb-2">
							<div className="flex space-x-4 mt-4">
								<button
									type="button"
									className="bg-red-500 text-white px-4 py-2 rounded-full"
								>
									G
								</button>
								<button
									type="button"
									className="bg-blue-500 text-white px-4 py-2 rounded-full"
								>
									F
								</button>
							</div>
						</div>
					</div>
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
							{" "}
							GESCO
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
