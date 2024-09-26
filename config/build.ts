export const buildConfig = () => {
    return {
        // target: ['modules'], // 设置最终构建的浏览器兼容目标
        polyfillModulePreload: true, // 是否自动注入 module preload 的 polyfill
        outDir: 'dist', // 指定输出路径
        assetsDir: 'assets', // 指定生成静态文件目录
        assetsInlineLimit: '4096', // 小于此阈值的导入或引用资源将内联为 base64 编码
        cssCodeSplit: true, // 启用 CSS 代码拆分
        cssTarget: '', // 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致
        sourcemap: false, // 构建后是否生成 source map 文件
        rollupOptions: {
            external: ['moment', 'video.js', 'jspdf', 'xlsx'],
            output: {
                chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
                entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
                assetFileNames: '[ext]/[name]-[hash].[ext]'// 资源文件像 字体，图片等
                // manualChunks(id: string | string[]) {
                // 	if (id.includes('node_modules')) {
                // 		// 让每个插件都打包成独立的文件
                // 		return id.toString().split('node_modules/')[1].split('/')[0].toString();
                // 	}
                // }

            }
        }, // 自定义底层的 Rollup 打包配置
        // lib: {}, // 构建为库
        manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
        ssrManifest: false, // 构建不生成 SSR 的 manifest 文件
        minify: 'terser', // 启用 terser 压缩  // 指定使用哪种混淆器
        terserOptions: {
            compress: {
                drop_console: true, // 删除所有 console
                drop_debugger: true // 删除 debugger
            }
        }, // 传递给 Terser 的更多 minify 选项
        write: true, // 启用将构建后的文件写入磁盘
        emptyOutDir: true, // 构建时清空该目录
        brotliSize: true, // 启用 brotli 压缩大小报告
        chunkSizeWarningLimit: 500 // chunk 大小警告的限制
        // watch: null // 设置为 {} 则会启用 rollup 的监听器
    };
};
