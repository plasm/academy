module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'standard',
    '@nuxtjs',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:css-modules/recommended',
    'plugin:vue-scoped-css/recommended',
    'plugin:tailwindcss/recommended'
  ],
  plugins: [
    'vue',
    'css-modules'
  ],
  rules: {
    'no-console': 'off',
    // 'no-debugger': process.env.NODE_ENV !== 'production' ? 'warn' : 'off',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': 'off',
    'eol-last': ['error', 'always'],
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 99,
        multiline: 1
      }
    ],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue-scoped-css/no-unused-selector': 'off',
    'vue-scoped-css/enforce-style-type': 'off',
    'tailwindcss/no-custom-classname': 'off'
  }
}
