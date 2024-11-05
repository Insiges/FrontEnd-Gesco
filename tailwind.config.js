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
				navyBlue: "#2C3E50",
				softBlue: "#3498DB",
				softOrange: "#E67E22",
				softGreen: "#27AE60",
				lightGray: "#ECF0F1",
				darkGray: "#34495E",
			},
			backgroundImage: {
				"custom-blue": "linear-gradient(to right, #6B71F2 0%, #3E418C 100%)",
				"custom-blue-2": "linear-gradient(to right, #7C93C3 0%, #C5CFE4 100%)",
				"custom-yellow": "linear-gradient(to right, #F9F45C 0%, #FFB600 100%)",
			},
		},
	},
	plugins: [],
};
