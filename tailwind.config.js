/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				alatsi: ["Alatsi", "sans-serif"],
			},
		},
	},
	plugins: [],
};
