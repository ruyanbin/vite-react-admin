import react from "@vitejs/plugin-react-swc";
// import Voerkai18nPlugin from "@voerkai18n/vite";
import externalGlobals from "rollup-plugin-external-globals";
import { visualizer } from "rollup-plugin-visualizer"; //打包分析插件
import AutoImport from "unplugin-auto-import/vite";
import AntdResolver from "unplugin-antd-resolver"; // 实现 antd 组件的按需引入
import viteCompression from "vite-plugin-compression"; // 使用 gzip 或者 brotli 来压缩资源
import Inspect from "vite-plugin-inspect";
import ViteRestart from "vite-plugin-restart"; // 通过监听文件修改，自动重启 vite 服
// import eslintPlugin from 'vite-plugin-eslint
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';

const projectRootDir = path.resolve(__dirname);
export const createPluginConfig = (isBuild: boolean) => {
	const plugins = [
		alias({
			entries: [
				{
					find: 'src',
					replacement: path.resolve(projectRootDir, 'src')
					// OR place `customResolver` here. See explanation below.
				}
			]
		}),
		resolve(),
		react(),
		AutoImport({
			imports: ["react", "react-router-dom"],
			resolvers: [AntdResolver()],
			dts: "src/types/auto-import.d.ts"
		})
	];
	if (isBuild) {
		const devArr = [
			// eslintPlugin(),
			Inspect(),
			ViteRestart({
				restart: ["my.config.[jt]s"]
			})
			// Voerkai18nPlugin({
			//     debug: true // 输出一些调试信息
			// })
		];
		plugins.push(...devArr);
	} else {
		const prodArr = [
			// 查看项目依赖
			visualizer({ open: true }),
			// gzip 压缩
			viteCompression({
				verbose: true, // 是否在控制台中输出压缩结果
				disable: false,
				threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
				algorithm: "gzip", // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
				ext: ".gz",
				deleteOriginFile: true // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
			}),
			externalGlobals({
				moment: "moment",
				"video.js": "videojs",
				jspdf: "jspdf",
				xlsx: "XLSX"
			})
		];
		plugins.push(...prodArr);
	}

	return plugins;
};
