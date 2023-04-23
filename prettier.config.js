module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  proseWrap: 'never',
  endOfLine: 'lf',
  semi: false,
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('prettier-plugin-packagejson'),
  ],
}
