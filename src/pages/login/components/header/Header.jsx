import React from "react";
import { Link } from "react-router-dom";
import logoImg from "/logoGesco.png";

export function Header() {
	return (
		<nav className="bg-[#E7E7EC] mx-auto  p-6 lg:px-8  flex justify-between items-center w-full ">
			<div className="flex items-center">
				<Link
					to="/"
					className="no-underline bg-tranparent flex place-items-center"
				>
					<img src={logoImg} alt="Logo" className="w-12" />
					<h2 className="text-3xl text-[#060273] font-bold hidden lg:block ml-2">
						Gesco
					</h2>
				</Link>
			</div>
		</nav>
	);
}
