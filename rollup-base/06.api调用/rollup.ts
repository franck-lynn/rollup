
// eslint-disable-next-line @typescript-eslint/no-var-requires
const rollup = require('rollup')

import { nodeResolve } from "@rollup/plugin-node-resolve" // 告诉 Rollup 如何查找外部模块
import commonjs from "@rollup/plugin-commonjs" // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import vue from "rollup-plugin-vue" // 打包 vue
import babel from "@rollup/plugin-babel" // rollup 的 babel 插件，ES6转ES5

const build = async () => {
    const inputOpts = {
        input: "src/index.ts",
        plugins: [
            nodeResolve({ extensions: ["vue"] }),
            babel({
                exclude: "node-modules/**",
                extensions: [".js", "ts"],
                presets: ["@babel/preset-env", "@babel/preset-typescript"],
                babelHelpers: "bundled",
            }),
            commonjs(),
            vue(),
        ],
    }
    const bundle = await rollup.rollup(inputOpts)

    const esm = {
        format: "es",
        file: "dist/vue-rollup-component-template.esm.js",
    }
    await bundle.write(esm)
}
build()