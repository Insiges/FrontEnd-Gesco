import { FaEnvelope, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../../../public/logoGesco.png";

const Footer = () => {
	return (
		<footer className="bg-firstBlue flex justify-center items-center">
			<div className="mt-8 mb-8 flex flex-col items-center">
				<img src={logo} alt="" className="w-20 h-20" />

				<div className="flex flex-col md:flex-row md:space-x-64 mt-4 ">
					<div className="mb-4 md:mb-0">
						<h1 className="text-gray-900 text-xl items-center text-center md:text-start font-semibold font-alatsi">
							Quick Link
						</h1>
						<ul className="text-center md:text-left">
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<IoIosArrowForward className="text-[#b6b6b6]" />{" "}
								<a href="#home">Home</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<IoIosArrowForward className="text-[#b6b6b6]" />{" "}
								<a href="#about">About</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<IoIosArrowForward className="text-[#b6b6b6]" />{" "}
								<a href="#services">Services</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<IoIosArrowForward className="text-[#b6b6b6]" />{" "}
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>

					<div className="mb-4 md:mb-0">
						<h1 className="text-gray-900 text-xl items-center text-center md:text-start font-semibold font-alatsi">
							Our Services
						</h1>
						<ul>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<IoIosArrowForward className="text-[#b6b6b6]" />{" "}
								<a href="#web-development">Web Development</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<IoIosArrowForward className="text-[#b6b6b6]" />{" "}
								<a href="#app-development">App Development</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<IoIosArrowForward className="text-[#b6b6b6]" />{" "}
								<a href="#ui-ux-design">UI/UX Design</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<IoIosArrowForward className="text-[#b6b6b6]" />{" "}
								<a href="#seo">SEO</a>
							</li>
						</ul>
					</div>

					<div className="mb-4 md:mb-0">
						<h1 className="text-gray-900 text-xl items-center text-center md:text-start font-semibold font-alatsi">
							Contact Info
						</h1>
						<ul>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<FaPhone className="text-[#b6b6b6]" />{" "}
								<a href="tel:+551234356">+55 1234356</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<FaPhone className="text-[#b6b6b6]" />{" "}
								<a href="tel:+551234356">+55 1234356</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<FaEnvelope className="text-[#b6b6b6]" />{" "}
								<a href="mailto:info@example.com">info@example.com</a>
							</li>
						</ul>
					</div>

					<div className="mb-4 md:mb-0">
						<h1 className="text-gray-900 text-xl items-center text-center md:text-start font-semibold font-alatsi">
							Follow Us
						</h1>
						<ul>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<FaFacebookF className="text-[#b6b6b6]" />{" "}
								<a href="https://facebook.com"> Facebook</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<FaInstagram className="text-[#b6b6b6]" />{" "}
								<a href="https://instagram.com"> Instagram</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<FaXTwitter className="text-[#b6b6b6]" />{" "}
								<a href="https://twitter.com"> Twitter</a>
							</li>
							<li className="flex items-center justify-center md:justify-start mt-4 text-[#777777]">
								<FaLinkedin className="text-[#b6b6b6]" />{" "}
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
