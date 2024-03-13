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
      colors: {
        'tfp-blue-100': '#1D3E59',
        'tfp-blue-200': '#22303C',
        'tfp-blue-300': '#496179',
        'tfp-blue-400': '#35516A',
        'tfp-gold-100': '#C39455',
        'tfp-gold-200': '#A27C37',
        'tfp-gold-300': '#D59C1F',
        'tfp-white-100': '#F5F5F5',
      },
      scale: {
        '-100': '-1',
      },
    },
  },
  plugins: [],
};
export default config;
