const themeSwapper = require('tailwindcss-theme-swapper')

const baseTheme = {
  colors: {
    primary: '#384cff',
    'primary-active': '#0014c7',
    surface: '#ddd',
    base: '#eee',
    dark: '#222',
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  borderRadius: {
    default: '5px',
  },
}

const darkTheme = {
  colors: {
    primary: '#e320b6',
    'primary-active': '#ff00c4',
    surface: '#111',
    base: '#000',
    dark: '#ccc',
  },
}

const geocitiesTheme = {
  colors: {
    primary: '#7f9e0e',
    'primary-active': '#70a300',
    surface: '#2f4d2f',
    base: '#243b24',
    dark: '#66a663',
  },
}

const spacierTheme = {
  spacing: {
    small: '8px',
    medium: '16px',
    large: '32px',
  },
}

const squarierTheme = {
  borderRadius: {
    default: '0',
  },
}

module.exports = {
  plugins: [
    themeSwapper({
      themes: [
        { name: 'base', selectors: [':root'], theme: baseTheme },
        { name: 'dark', selectors: ['.dark'], theme: darkTheme },
        { name: 'geocities', selectors: ['.geocities'], theme: geocitiesTheme },
        { name: 'spacier', selectors: ['.spacier'], theme: spacierTheme },
        { name: 'squarier', selectors: ['.squarier'], theme: squarierTheme },
      ],
    })
  ]
}
