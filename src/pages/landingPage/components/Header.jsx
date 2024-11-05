import React from "react";
import { Link } from "react-router-dom";
import logoImg from "/logoGesco.png";

const Header = () => {
	const handleLoginClick = () => {
		window.location.href = "/login";
	};

	return (
		<header className="bg-[#E7E7EC]">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
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

				<button
					type="button"
					onClick={handleLoginClick}
					className="text-center bg-custom-blue w-[90px] h-[40px] text-white font-alatsi text-[18px] rounded-full"
				>
					Login
				</button>
			</nav>
		</header>
	);
};

export default Header;
