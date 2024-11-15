import { Fade } from "react-awesome-reveal";
import image from "../../../assets/landingPage/ThirdSection.png";

const ThirdSection = () => {
	return (
		<div
			className="flex flex-col md:flex-row justify-center  items-center ml-4 mt-8 md:ml-16"
			style={{ height: "100vh" }}
		>
			<div className="flex-shrink-0 mb-8 md:mb-0">
				<Fade triggerOnce delay={500}>
					<img
						src={image}
						alt=""
						className="w-full md:w-auto"
						style={{
							width: "100%",
							maxWidth: "900px",
							height: "auto",
							maxHeight: "580px",
							objectFit: "cover",
							objectPosition: "center",
						}}
					/>
				</Fade>
			</div>

			<div className="flex-grow ml-0 md:ml-8 mr-4 md:mr-32 ">
				<h1 className="text-[#060343] text-4xl md:text-5xl text-center font-bold w-full mt-8 mx-auto">
					Fale com a nossa
					<br />
					<span className="text-[#FFB400] block text-center">equipe:</span>
				</h1>

				<p className="text-center w-full mt-8 mx-auto">
					Quer saber mais?{" "}
					<span className="font-semibold">
						Dê o próximo passo e transforme sua Instituição com o Gesco!
					</span>{" "}
					Se você deseja que sua escola aproveite todos os benefícios que o
					oferecemos, entre em contato conosco! Nossa equipe está pronta para
					responder suas perguntas e apresentar soluções personalizadas que
					farão a diferença na gestão educacional.
				</p>
			</div>
		</div>
	);
};

export default ThirdSection;
