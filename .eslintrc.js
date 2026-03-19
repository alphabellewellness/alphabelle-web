/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: ["next/core-web-vitals"],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			// Solo aplica parser de TS si realmente hay archivos TS
			parser: "@typescript-eslint/parser",
			plugins: ["@typescript-eslint"],
			rules: {},
		},
	],
};
