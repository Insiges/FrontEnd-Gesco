/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				alatsi: ["Alatsi", "sans-serif"],
			},
			colors: {
				firstBlue: "#0C356A",
				secondBlue: "#0174BE",
				yellow: "#FFC436",
				secondYellow: "#FFF0CE",
			},
			backgroundImage: {
				"custom-blue": "linear-gradient(to right, #7C93C3 0%, #C5CFE4 100%)",
				"custom-yellow": "linear-gradient(to right, #F9F45C 0%, #FFB600 100%)",
			},
		},
	},
	plugins: [],
};
