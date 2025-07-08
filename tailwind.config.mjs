/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Paleta semántica para techos metálicos - Profesional y confiable
        primary: '#1e2e4f',      // Color principal de marca - Azul oscuro profesional
        secondary: '#31487a',     // Color secundario - Azul medio para elementos importantes
        accent: '#192338',        // Color de acento - Azul muy oscuro para elementos destacados
        background: '#f8f9fa',    // Fondo principal - Blanco puro para limpieza visual
        neutral: '#e1e2e4',       // Color neutro - Gris claro para fondos secundarios
        light: '#d2d5d8',         // Color claro - Gris muy claro para bordes y separadores
        
        // Variaciones para estados y jerarquía
        'primary-hover': '#2a3d66',    // Hover del color principal
        'primary-active': '#162238',    // Estado activo del color principal
        'secondary-hover': '#3d5a8a',   // Hover del color secundario
        'secondary-active': '#2a3d66',  // Estado activo del color secundario
        'accent-hover': '#1a2a42',      // Hover del color de acento
        'accent-active': '#142030',     // Estado activo del color de acento
        
        // Colores de texto para contraste óptimo
        'text-primary': '#1a1e22',      // Texto principal oscuro
        'text-secondary': '#3a3e42',    // Texto secundario
        'text-muted': '#5a5e62',        // Texto atenuado
        'text-light': '#7a7e82',        // Texto claro
        
        // Colores de éxito y advertencia
        'success': '#0ea5e9',           // Azul de éxito
        'success-light': '#e0f2fe',     // Fondo de éxito claro
        'warning': '#f59e0b',           // Amarillo de advertencia
        'warning-light': '#fef3c7',     // Fondo de advertencia claro
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} 