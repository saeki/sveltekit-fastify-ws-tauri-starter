/** @typedef {import("prettier").Config} PrettierConfig*/

/** @type { PrettierConfig } */
const config = {
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 120,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  plugins: ["prettier-plugin-svelte"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};

export default config;
