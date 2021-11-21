/** @type {import('rollup').RollupOptions} */
// https://segmentfault.com/a/1190000019744295
import { nodeResolve } from "@rollup/plugin-node-resolve" // 告诉 Rollup 如何查找外部模块
import commonjs from "@rollup/plugin-commonjs" // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import vue from "rollup-plugin-vue" // 打包 vue
import babel from "@rollup/plugin-babel" // rollup 的 babel 插件，ES6转ES5

export default {
    input: "src/index.js", // 入口
    plugins: [
        nodeResolve({ extensions: ["vue"] }),
        commonjs(),
        vue(),
        babel({
            // 可以观察到. 在打包后的箭头函数已经转化了
            presets: ["@babel/preset-env"],
            babelHelpers: "bundled",
        }),
    ],
}
