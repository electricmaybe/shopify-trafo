/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  mode: 'jit',
  theme: {},
  purge: [
    './build/assets/*.js',
    './build/assets/!(style).css',
    './build/layout/*.liquid',
    './build/sections/*.liquid',
    './build/snippets/*.liquid',
    './build/templates/*.liquid'
  ]
}