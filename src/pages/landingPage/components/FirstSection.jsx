import landingPageImage01 from "../../../assets/landingPage/landingPageImage01.png";

const FirstSection = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="flex flex-col mt-8 md:flex-row justify-center items-center text-center md:text-left md:space-x-8 w-full max-w-6xl mx-auto">
				<div className="flex-auto md:w-1/2">
					<h1 className="text-6xl font-bold w-full mt-8 mx-auto md:mx-0 text-[#060273]">
						Conheça o nosso <br />
						<span className="text-[#FFB400]">Software</span>
					</h1>
					<p className="w-full mt-8 mx-auto md:mx-0">
						O Gesco é a solução ideal para simplificar a gestão escolar. Nossa
						plataforma integra todos os setores, tornando os processos
						administrativos mais ágeis e fortalecendo a comunicação entre
						escola, professores e alunos.
						<br />
						<br />
						<span className="font-semibold">
							Concentre-se no essencial: uma educação de qualidade!
						</span>{" "}
						Quer saber mais? Fale conosco clicando no botão abaixo!
					</p>
					<button
						className="bg-custom-blue text-white rounded-3xl p-3 mt-8 mb-8 font-alatsi"
						type="button"
					>
						Fale com nossa equipe!
					</button>
				</div>

				<div className="flex-shrink-0 md:w-1/2 mt-8 md:mt-0">
					<img
						src={landingPageImage01}
						alt=""
						className="w-[760px] h-[410px] max-w-full object-contain mx-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default FirstSection;
