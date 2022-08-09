/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-dark": "#1B1926",
				"primary-light": "#15141A",
				"primary-blue": "#6F8BD2",
				"primary-pink": "#DB73C4",
				gray: "#808080",
			},
			backgroundColor: {},
		},
	},
	plugins: [],
};
