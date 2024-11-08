import React from "react";
import peopleImage from "../../../../assets/login/people.png";
import { TYPE_OF_SIGNIN } from "../../../../consts/storageKeys";
import { setStorage } from "../../../../services/storage/storage";
import useUserInfos from "../../../../stores/userStore";
import { Header } from "../header/Header";

export function Roles({ setRole }) {
	const { setUserType } = useUserInfos();

	const handleSelectRole = (role) => {
		setStorage(TYPE_OF_SIGNIN, role);
		setUserType(role);
		setRole(role);
	};
	return (
		<div>
			<Header />
			<div className="h-[500px] w-screen flex flex-col mt-0">
				<div className="flex flex-grow justify-center mt-0">
					<div className="flex flex-col md:flex-row w-full max-w-7xl bg-white gap-0">
						<div className="w-full md:w-[850px] p-2 flex flex-col justify-center items-center text-center mx-auto md:ml-[150px]">
							<h1 className="text-[28px] md:text-[44px] font-bold mb-1 whitespace-nowrap">
								<span style={{ color: "#060273" }}>Qual o seu tipo de</span>
							</h1>
							<h1 className="text-[28px] md:text-[44px] font-bold mb-6">
								<span style={{ color: "#FFB400" }}>usuário?</span>
							</h1>

							<div className="space-y-4 w-[180px]">
								<button
									type="button"
									onClick={() => handleSelectRole("escola")}
									className="w-full bg-custom-blue-2 from-[#7C93C3] to-[#C5CFE4] text-[#060273] px-4 py-2 font-bold border-2 rounded-full hover:bg-white hover:border-[#FFC436] hover:text-[#060273] text-[15px] mt-[10px]"
								>
									Administração
								</button>
								<button
									type="button"
									onClick={() => handleSelectRole("professor")}
									className="w-full bg-custom-blue-2 text-[#060273] px-4 py-2  font-bold border-2 rounded-full hover:bg-white hover:border-[#FFC436] hover:text-[#060273] text-[15px]"
								>
									Professor
								</button>
							</div>
						</div>

						<div className="flex items-center justify-center w-full md:w-[800px] mt-8 md:mt-0">
							<img
								src={peopleImage}
								alt="pc"
								className="w-full max-w-[300px] md:max-w-[800px] h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
