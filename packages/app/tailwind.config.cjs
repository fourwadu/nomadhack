/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				"primary-dark": "#1B1926",
				"primary-light": "#15141A",
				"primary-blue": "#6F8BD2",
				"primary-pink": "#DB73C4",
				"primary-gray": "#808080",
			},
			backgroundColor: {},
		},
	},
	plugins: [],
};
