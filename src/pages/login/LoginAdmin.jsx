import React from "react";
import { Header } from "./components/header/Header";

const LoginAdmin = () => {
	return (
		<div>
			<Header />
			<div className="flex flex-grow justify-center mt-14 gap-2 mx-auto">
				<div className="flex flex-col md:flex-row w-full max-w-7xl items-center">
					<div className="w-full md:w-[550px] flex flex-col justify-center items-center bg-white p-4 mt-10">
						<h1 className="text-[#060273] text-2xl md:text-3xl font-bold mb-10">
							Bem-vindo de volta, Administrador!
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
						<div className="flex justify-end w-full mt-2 max-w-[375px]">
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
								className="bg-custom-yellow text-[#060273] text-lg font-bold px-3 py-2 w-full max-w-[400px] flex justify-center rounded-full mx-auto"
							>
								Login
							</button>
							<div className="flex items-center justify-center space-x-4 mt-4 mb-4 mx-auto">
								<div className="w-[25%] sm:w-1/8 border-t border-[#504C4C]" />
								<p className="text-[#504C4C] mx-4">ou continue com</p>
								<div className="w-[25%] sm:w-1/8 border-t border-[#504C4C]" />
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

					<div className="w-full md:w-[600px] flex flex-col justify-center items-center mt-10 md:mt-0">
						<img
							src="/src/assets/login/pc.png"
							alt="notebook"
							className="w-full max-w-[300px] md:max-w-[390px] h-auto max-h-[700px]"
						/>
						<p className="text-center text-[16px] md:text-[18px] mt-4">
							<span style={{ color: "#55679C" }}>
								Facilite e organize seu trabalho com eficiência usando o
							</span>
							<br />
							<span
								className="text-[18px] md:text-[20px] font-bold"
								style={{ color: "#030143" }}
							>
								GESCO
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginAdmin;
