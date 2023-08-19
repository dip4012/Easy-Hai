/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				Nunito: ["Nunito Sans", "sans-serif"],
				Raleway: ["Raleway", "sans-serif"],
				Inter: ["Inter", "sans-serif"],
				Roboto: ["Roboto", "sans-serif"],
			},
			keyframes: {
				bounceHorizontal: {
					"0%, 100%": {
						transform: "translateX(-25%)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
					},
					"50%": {
						transform: "translateX(0)",
						animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
					},
				},
				marquee1: {
					"0%": {
						transform: "translateX(0%)",
					},
					"100%": {
						transform: "translateX(-100%)",
					},
				},
				marquee2: {
					"0%": {
						transform: "translateX(100%)",
					},
					"100%": {
						transform: "translateX(0%)",
					},
				},
			},
			animation: {
				bounceHorizontal: "bounceHorizontal 1s infinite",
				marquee1: "marquee1 30s linear infinite",
				marquee2: "marquee2 30s linear infinite",
			},
		},
	},
	plugins: [],
}
