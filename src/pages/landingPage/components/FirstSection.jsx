import landingPageImage01 from "../../../assets/landingPage/landingPageImage01.png";

const FirstSection = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="flex flex-col mt-8 md:flex-row justify-center items-center text-center md:text-left md:space-x-8 w-full max-w-6xl mx-auto">
				<div className="flex-auto md:w-1/2">
					<h1 className="text-6xl font-bold w-full mt-8 mx-auto md:mx-0">
						Conheça o nosso <br />
						<span className="text-yellow">Software.</span>
					</h1>
					<p className="w-full font-semibold mt-8 mx-auto md:mx-0">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quia
						error officiis quibusdam, iusto quae blanditiis atque sed. Cum
						dolorem excepturi explicabo expedita? Totam ab quod sed fugit
						doloribus voluptatibus.
					</p>
					<button
						className="bg-secondBlue text-white rounded-3xl p-3 mt-8"
						type="button"
					>
						Fale com nossa equipe!
					</button>
				</div>

				<div className="flex-shrink-0 md:w-1/2 mt-8 md:mt-0">
					<img
						src={landingPageImage01}
						alt=""
						className="w-[543px] h-[400px] max-w-full object-contain mx-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default FirstSection;
