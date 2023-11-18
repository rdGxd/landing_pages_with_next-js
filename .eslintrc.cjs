module.exports = {
  root: true,
  env: { browser: true, es2023: true, jest: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:@next/next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@next/next/no-img-element": "off",
  },
};
