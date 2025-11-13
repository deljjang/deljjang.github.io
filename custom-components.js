const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
  const customButtons = {
    '.btn-custom': {
      padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
      borderRadius: theme('borderRadius.md'),
      fontWeight: theme('fontWeight.semibold'),
      transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 3px ${theme('colors.brand.primary-light')}80`, // 50% opacity
      },
    },
    '.btn-custom-primary': {
      backgroundColor: theme('colors.brand.primary'),
      color: theme('colors.white'),
      '&:hover': {
        backgroundColor: theme('colors.brand.primary-dark'),
      },
    },
    '.btn-custom-secondary': {
      backgroundColor: theme('colors.brand.secondary'),
      color: theme('colors.white'),
      '&:hover': {
        backgroundColor: '#047857', // A slightly darker green from theme
      },
    },
    '.btn-custom-danger': {
      backgroundColor: theme('colors.error-500', '#f04438'),
      color: theme('colors.white'),
      '&:hover': {
        backgroundColor: theme('colors.error-600', '#d92d20'),
      },
    },
  };

  addComponents(customButtons);
});
