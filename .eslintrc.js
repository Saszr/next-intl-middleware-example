const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: 'next/core-web-vitals',
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'warn',
    'react-hooks/exhaustive-deps': 'error',
  },
})
