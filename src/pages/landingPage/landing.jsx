import React from "react";
import { Fade } from "react-awesome-reveal";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/footer";
import Header from "./components/header";

export const LandingPage = () => {
	return (
		<>
			<Header />
			<Fade triggerOnce>
				<FirstSection />
			</Fade>

			<Fade triggerOnce delay={500}>
				<SecondSection />
			</Fade>

			<Fade triggerOnce delay={100}>
				<ThirdSection />
			</Fade>
			<Footer />
		</>
	);
};
