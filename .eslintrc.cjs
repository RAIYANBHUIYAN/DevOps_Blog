const js = require("@eslint/js");
const globals = require("globals");
const pluginReact = require("eslint-plugin-react");

module.exports = [
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
]; 