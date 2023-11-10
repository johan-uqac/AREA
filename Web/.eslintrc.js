module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/prop-types': 'off', // You can turn this on to enforce prop types
    'react/react-in-jsx-scope': 'off', // For Next.js projects, you can turn this on
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'jsx-a11y/anchor-is-valid': 'off', // If you use Next.js, you might want to enable this
    'no-undef': 'off',
  },
};
