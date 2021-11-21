import { RollupOptions } from "rollup"
import path from "path"
// 执行命令 rollup --config rollup.config.ts --configPlugin typescript
// A rollup plugin which converts .json to es6 modules.
// json 插件是将 json 转成 es6 模块 , 选项有压缩, 包括, 排除等
import json from "@rollup/plugin-json"
// 编译 typescript 的插件, 编译 ts 到js
// 会继承tsconfig.json的选项
import typescript from "@rollup/plugin-typescript"
import { nodeResolve } from "@rollup/plugin-node-resolve"

const config: RollupOptions = {
    input: "src/main.ts",
    output: {
        file: "dist/bundle.js",
        format: "cjs",
        //  Rollup 'sourcemap' option must be set to generate source maps
        // 出现这个警告加上下面这句
        sourcemap: true,
    },
    plugins: [
        typescript({
            tsconfig: path.resolve(__dirname, "./tsconfig.json"),
        }),
        nodeResolve(), // 插件可以告诉 Rollup 如何查找外部模块
        json(), // 处理 json 文件
    ],
}

export default config
