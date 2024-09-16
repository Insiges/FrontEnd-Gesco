import React from "react";
import { Header } from "../login/components/header/Header";

const LoginPage = () => {
	return (
		<div>
			<Header />
			<div className="flex flex-grow justify-center mt-14 gap-2 mx-auto">
				<div className="w-550px flex flex-col justify-center items-center bg-white p-4 mt-10 ">
					<h1 className="text-[#060273] text-4xl font-bold mb-10">
						Bem-vindo de volta!
					</h1>
					<form className="space-y-4 w-full max-w-sm">
						<input
							type="text"
							placeholder="Username"
							className="block w-full p-[6px] border border-black rounded-full"
						/>
						<input
							type="password"
							placeholder="Password"
							className="block w-full p-[6px] border border-black rounded-full"
						/>
					</form>
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
							type="button"
							className="bg-custom-yellow text-[#060273] text-lg font-bold px-3 py-2 rounded-full w-full"
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
						src="src/pages/login/components/images/pc.png"
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
};

export default LoginPage;
