/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'royal-blue': 'rgb(2, 21, 37)',
				'royal-blue-light': 'rgb(4, 41, 70)',
				'royal-blue-mid': 'rgb(0, 10, 17)',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}