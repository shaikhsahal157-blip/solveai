import type { Config } from 'tailwindcss'
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#101828', mist: '#f7f9fc', brand: '#635bff' }, boxShadow: { soft: '0 20px 60px rgba(16,24,40,.08)' } } }, plugins: [] } satisfies Config
