export const serverConfig = () => {
    return {
        host: "localhost", // 指定服务器应该监听哪个 IP 地址
        port: 5000, // 指定开发服务器端口
        strictPort: true, // 若端口已被占用则会直接退出
        https: false, // 启用 TLS + HTTP/2
        open: true, // 启动时自动在浏览器中打开应用程序
        cors: true, // 配置cors
        force: true, // 强制依赖预构建
        headers: {},// 指定服务器响应的 header。
        // hmr:boolean | { protocol?: string, host?: string, port?: number, path?: string, timeout?: number, overlay?: boolean, clientPort?: number, server?: Server }
        // watch 传递给 chokidar 的文件系统监听器选项。
        /**
         * // 以中间件模式创建 Vite 服务器
         *     // 'ssr' 将禁用 Vite 自身的 HTML 服务逻辑，因此你应该手动为 index.html 提供服务。
         *
         *     // 'html' 将启用 Vite 自身的 HTML 服务逻辑。
         * */
        // middlewareMode: '',
        // fs: {
        //   strict: true, // 限制为工作区 root 路径以外的文件的访问
        //   allow: [], // 限制哪些文件可以通过 /@fs/ 路径提供服务
        //   deny: [".env", ".env.*", "*.{pem,crt}"], // 用于限制 Vite 开发服务器提供敏感文件的黑名单
        // },
        proxy: { // 配置自定义代理规则
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    };
};
