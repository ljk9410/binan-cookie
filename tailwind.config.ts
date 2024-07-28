import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(10deg)' },
					'50%': { transform: 'rotate(-10deg)' },
				},
				wiggleUpDown: {
					'0%, 100%': { transform: 'translateY(0.7%)' },
					'50%': { transform: 'translateY(-0.7%)' },
				},
				fadeInDown: {
					'0%': { opacity: '0', transform: 'translateY(-40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				wiggle: 'wiggle 0.5s ease-in-out infinite',
				wiggleUpDown: 'wiggleUpDown 0.2s ease-in-out infinite',
				fadeInDown: 'fadeInDown 0.8s ease-in-out forwards',
			},
		},
	},
	plugins: [],
};
export default config;
