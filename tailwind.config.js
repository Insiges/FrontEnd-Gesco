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
		},
	},
	plugins: [],
};
