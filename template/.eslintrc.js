// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint",
    ecmaVersion: 6
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ["vue"],

  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  "extends": [
    "plugin:vue/recommended",
    "standard"
  ],

  // add your custom rules here
  rules: {
    "no-debugger": "off",
    "no-console": "off",
    "no-useless-escape": "off",
    "vue/require-prop-types": "off"
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    mpvue: true,
    mpvuePlatform: true
  }
};
