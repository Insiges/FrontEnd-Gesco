import React from "react";
import gescoIcon from "../../../../assets/login/icone.png";

export function Header() {
	return (
		<nav className="bg-[#E7E7EC] p-4 flex justify-between items-center w-full h-[68px]">
			<div className="flex items-center">
				<img
					src="/src/assets/login/icone.png"
					alt="icon"
					className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 mr-2"
				/>
				<div className="text-[#060273] text-[18px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[32px] font-bold tracking-wider">
					GESCO
				</div>
			</div>
		</nav>
	);
}
