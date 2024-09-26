// prettier --write: 使用 Prettier 进行代码格式化，并将格式化后的结果写回文件。
// eslint --fix: 使用 ESLint 进行代码检查和修复，并自动修复一些可修复的代码风格和错误问题。
export default {
	"*.{js,jsx,ts,tsx,vue}": ["prettier --write", "eslint --fix"],
	"*.{scss,less,html,css,md}": ["prettier --write"]
};
