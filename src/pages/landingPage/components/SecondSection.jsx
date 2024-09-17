import image01 from "../../../assets/landingPage/image01.png";
import image02 from "../../../assets/landingPage/image02.png";
import image03 from "../../../assets/landingPage/image03.png";
import Card from "./card";

const SecondSection = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-full text-center md:text-left">
				<h1 className="text-4xl text-yellow font-bold mt-8 md:ml-12">
					Melhore Sua Gestão
				</h1>
			</div>

			<div className="flex justify-center space-x-4 mt-5 w-full md:w-auto">
				<Card
					imageSrc={image01}
					title="Titulo"
					text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, velit maxime? Odit quibusdam corporis consectetur dolorem! Sunt ipsam, dignissimos debitis quidem ab neque totam molestias animi, ducimus expedita ratione itaque?"
				/>
				<Card
					imageSrc={image02}
					title="Titulo"
					text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, velit maxime? Odit quibusdam corporis consectetur dolorem! Sunt ipsam, dignissimos debitis quidem ab neque totam molestias animi, ducimus expedita ratione itaque?"
				/>
				<Card
					imageSrc={image03}
					title="Titlulo"
					text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, velit maxime? Odit quibusdam corporis consectetur dolorem! Sunt ipsam, dignissimos debitis quidem ab neque totam molestias animi, ducimus expedita ratione itaque?
"
				/>
			</div>
		</div>
	);
};

export default SecondSection;
