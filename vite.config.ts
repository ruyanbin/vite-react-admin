import { defineConfig, } from 'vite'

import { cssConfig } from "./config/cssConfig.ts"
import { createPluginConfig } from "./config/plugin"
import { serverConfig } from "./config/server"
import { buildConfig } from "./config/build"
// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const isBuild = mode === 'development';
  console.log(command, mode, isSsrBuild, isPreview)

  return {
    envDir: "./env",
    plugins: createPluginConfig(isBuild),
    css: cssConfig(),
    clearScreen: true, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    server: serverConfig(),
    build: buildConfig()
  }


})
