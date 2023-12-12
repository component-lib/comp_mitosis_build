module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:@builder.io/mitosis/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  rules: {
    "@builder.io/mitosis/css-no-vars": "error",
    "prettier/prettier": "error",
  },
  plugins: ["@builder.io/mitosis"],
};
