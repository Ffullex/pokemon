module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-useless-constructor': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
  },
}
