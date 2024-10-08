import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: ["node_modules/", "dist/", "**/*.d.ts", "public/"]
	},
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"no-var": "error", //禁止使用var声明变
			"no-var": "error", // 要求使用 let 或 const 而不是 var
			"no-multiple-empty-lines": ["warn", { max: 1 }], // 不允许多个空行
			"no-unexpected-multiline": "error", // 禁止空余的多行
			"no-useless-escape": "off", // 禁止不必要的转义字符

			// typeScript (https://typescript-eslint.io/rules)
			"@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
			"@typescript-eslint/prefer-ts-expect-error": "error", // 禁止使用 @ts-ignore
			"@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
			"@typescript-eslint/semi": "off",
			"@typescript-eslint/no-unsafe-function-type": "off" // 禁止使用 Function 作为 type。
		}
	}
);
