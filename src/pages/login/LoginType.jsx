import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../login/components/header/Header";

const UserType = () => {
	const navigate = useNavigate();

	const handleUserTypeClick = (userType) => {
		navigate("/login");
	};

	return (
		<div>
			<Header />
			<div className="h-[500px] w-screen flex flex-col mt-0">
				<div className="flex flex-grow justify-center mt-0">
					<div className="flex w-full max-w-7xl bg-white gap-0">
						<div className="w-850px p-2 flex flex-col justify-center items-center text-center mx-auto ml-[150px]">
							<h1 className="text-[38px] font-bold mb-1 whitespace-nowrap">
								<span style={{ color: "#060273" }}>
									Qual o seu tipo de
								</span>{" "}
							</h1>
							<h1 className="text-[38px] font-bold mb-6">
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
									className="w-full bg-custom-blue text-[#060273] px-4 py-2  font-bold border-2 rounded-full hover:bg-white hover:border-[#FFC436] hover:text-[#060273] text-[15px]"
								>
									Professor
								</button>
							</div>
						</div>

						<div
							className="flex items-center justify-center"
							style={{ width: "800px" }}
						>
							<img
								src="src/pages/login/components/images/people.png"
								alt="pc"
								style={{ maxWidth: "800px", height: "auto", width: "800px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserType;
