import React from "react";
import gescoIcon from "../../../../assets/login/icone.png";

export function Header() {
	return (
		<nav className="bg-[#E7E7EC] p-4 flex justify-between items-center w-full h-[68px] mb-0 m-0">
			<div className="flex items-center">
				<img src={gescoIcon} alt="icon" className="h-16 mr-2" />
				<div className="text-[#060273] text-[25px] font-bold tracking-wider">
					GESCO
				</div>
			</div>
		</nav>
	);
}
