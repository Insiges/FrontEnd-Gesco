import { FaEnvelope, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
// import logo from "../../../../public/logoGesco.png";

const Footer = () => {
	return (
		<footer className="bg-[#E7E7EC] flex justify-center items-center">
			<div className="mt-8 mb-8 flex flex-col items-center">
				<img src={"/logoGesco.png"} alt="" className="w-20 h-20" />

				<div className="flex flex-col space-x-0 md:flex-row md:space-x-32 mt-4 ">
					<div className="mb-4 md:mb-0">
						<h1 className="text-[#060343] text-xl items-center text-center md:text-start font-semibold font-alatsi">
							Quick Link
						</h1>
						<ul className="text-center md:text-left">
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<IoIosArrowForward className="text-[#060273]" />{" "}
								<a href="#home">Home</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<IoIosArrowForward className="text-[#060273]" />{" "}
								<a href="#about">Sobre</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<IoIosArrowForward className="text-[#060273]" />{" "}
								<a href="#services">Serviços</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<IoIosArrowForward className="text-[#060273]" />{" "}
								<a href="#contact">Contato</a>
							</li>
						</ul>
					</div>

					<div className="mb-4 md:mb-0">
						<h1 className="text-[#060343] text-xl items-center text-center md:text-start font-semibold font-alatsi">
							Nossos Serviços
						</h1>
						<ul>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[[#060273]]">
								<IoIosArrowForward className="text-[#060273]" />{" "}
								<a href="#web-development">Web Development</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[[#060273]]">
								<IoIosArrowForward className="text-[#060273]" />{" "}
								<a href="#app-development">App Development</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[[#060273]]">
								<IoIosArrowForward className="text-[#060273]" />{" "}
								<a href="#ui-ux-design">UI/UX Design</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<IoIosArrowForward className="text-[#060273]" />{" "}
								<a href="#seo">SEO</a>
							</li>
						</ul>
					</div>

					<div className="mb-4 md:mb-0">
						<h1 className="text-[#060343] text-xl items-center text-center md:text-start font-semibold font-alatsi">
							Informações de Contato
						</h1>
						<ul>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<FaPhone className="text-[#060273]" />{" "}
								<a href="tel:+551234356">+55 1234356</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<FaPhone className="text-[#060273]" />{" "}
								<a href="tel:+551234356">+55 1234356</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<FaEnvelope className="text-[#060273]" />{" "}
								<a href="mailto:info@example.com"> info@gesco.com</a>
							</li>
						</ul>
					</div>

					<div className="mb-4 md:mb-0">
						<h1 className="text-[#060343] text-xl items-center text-center md:text-start font-semibold font-alatsi">
							Siga-nos
						</h1>
						<ul>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<FaFacebookF className="text-[#060273]" />{" "}
								<a href="https://facebook.com"> Facebook</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<FaInstagram className="text-[#060273]" />{" "}
								<a href="https://instagram.com"> Instagram</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<FaXTwitter className="text-[#060273]" />{" "}
								<a href="https://twitter.com"> Twitter</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#060273]">
								<FaLinkedin className="text-[#060273]" />{" "}
								<a href="https://linkedin.com"> LinkedIn</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
