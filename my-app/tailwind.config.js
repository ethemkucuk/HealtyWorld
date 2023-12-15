/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				lucida: ["Lucida Handwriting", "cursive"],
			},
			backgroundImage: {
				"hero-pattern": "url('/public/leaf.svg)",
			},
		},
	},
	plugins: [],
}
