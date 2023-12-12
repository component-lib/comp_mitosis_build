module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["xo", "plugin:@builder.io/mitosis/recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      extends: ["xo-typescript"],
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  rules: { "@builder.io/mitosis/css-no-vars": "error" },
  plugins: ["@builder.io/mitosis"],
};
