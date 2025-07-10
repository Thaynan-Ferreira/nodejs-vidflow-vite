// eslint.config.js
import js from '@eslint/js';

/** @type {import("eslint").FlatConfig[]} */
export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly'
      }
    },
    rules: {
      // Adicione regras personalizadas aqui se quiser
    }
  }
];
