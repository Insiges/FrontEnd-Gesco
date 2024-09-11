import React from "react";

const Header = () => {
	return (
		<header className="bg-firstBlue">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<a href="www.google.com" className="-m-1.5 p-1.5">
						<h1 className="text-5xl font-alatsi text-white">GESCO</h1>
					</a>
				</div>

				<button
					type="button"
					className="text-center justify-end bg-secondBlue w-[137px] h-[49px] text-white rounded-3xl"
				>
					Login
				</button>
			</nav>
		</header>
	);
};

export default Header;
