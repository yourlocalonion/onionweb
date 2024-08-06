/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				noto: ["Noto Sans", "sans-serif"],
				dmmono: ["DM Mono", "monospace"],
				chakra: ["Chakra Petch"],
				changa: ["Changa"]
			},
			keyframes: {
				wiggle: {
				  '0%, 100%': { transform: 'rotate(-1deg)' },
				  '50%': { transform: 'rotate(1deg)' },
				}
			},
			animation: {
				wiggle: 'wiggle 5s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'),],
}
