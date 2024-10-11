import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../login/components/header/Header";

const LoginType = () => {
	const navigate = useNavigate();

	const handleUserTypeClick = (userType) => {
		if (userType === "teacher") {
			navigate("/login/teacher");
		} else if (userType === "admin") {
			navigate("/login/admin");
		}
	};

	return (
		<div>
			<Header />
			<div className="h-[500px] w-screen flex flex-col mt-0">
				<div className="flex flex-grow justify-center mt-0">
					<div className="flex flex-col md:flex-row w-full max-w-7xl bg-white gap-0">
						<div className="w-full md:w-[850px] p-2 flex flex-col justify-center items-center text-center mx-auto md:ml-[150px]">
							<h1 className="text-[28px] md:text-[38px] font-bold mb-1 whitespace-nowrap">
								<span style={{ color: "#060273" }}>Qual o seu tipo de</span>
							</h1>
							<h1 className="text-[28px] md:text-[38px] font-bold mb-6">
								<span style={{ color: "#FFB400" }}>usuário?</span>
							</h1>

							<div className="space-y-4 w-[180px]">
								<button
									type="button"
									onClick={() => handleUserTypeClick("admin")}
									className="w-full bg-custom-blue from-[#7C93C3] to-[#C5CFE4] text-[#060273] px-4 py-2 font-bold border-2 rounded-full hover:bg-white hover:border-[#FFC436] hover:text-[#060273] text-[15px] mt-[10px]"
								>
									Administração
								</button>
								<button
									type="button"
									onClick={() => handleUserTypeClick("teacher")}
									className="w-full bg-custom-blue text-[#060273] px-4 py-2 font-bold border-2 rounded-full hover:bg-white hover:border-[#FFC436] hover:text-[#060273] text-[15px]"
								>
									Professor
								</button>
							</div>
						</div>

						<div className="flex items-center justify-center w-full md:w-[800px] mt-8 md:mt-0">
							<img
								src="/src/assets/login/people.png"
								alt="pc"
								className="w-full max-w-[300px] md:max-w-[800px] h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginType;
