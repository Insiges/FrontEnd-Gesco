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
							maxWidth: "908px",
							height: "auto",
							maxHeight: "580px",
							objectFit: "cover",
							objectPosition: "center",
						}}
					/>
				</Fade>
			</div>

			<div className="flex-grow ml-0 md:ml-8 mr-4 md:mr-32 ">
				<h1 className="text-4xl md:text-6xl text-center md:text-right font-bold w-full mt-8 mx-auto">
					Fale com a nossa
					<br />
					<span className="text-secondBlue block text-center md:text-right">
						equipe:
					</span>
				</h1>

				<p className="text-center md:text-right w-full font-semibold mt-8 mx-auto">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
					sint aliquam eveniet dignissimos temporibus. Nihil animi fugit
					deleniti! Illum facere quam earum quidem dolorem magni, a quae
					exercitationem omnis iusto? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Consequatur exercitationem harum nulla, et explicabo
					nemo cupiditate asperiores mollitia dolorum illum quod atque quos
					similique culpa animi voluptates laudantium! Quas, totam?
				</p>
			</div>
		</div>
	);
};

export default ThirdSection;
