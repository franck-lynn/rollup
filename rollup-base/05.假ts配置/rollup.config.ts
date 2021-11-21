//** @type {import('rollup').RollupOptions} */
// https://segmentfault.com/a/1190000019744295
//! 这个本质上是js, 只不过是文件名后缀改成 ts 而已.
//! rollup 暂时还不支持 ts 的 config, 还是要 rollup.config.js
import { nodeResolve } from "@rollup/plugin-node-resolve" // 告诉 Rollup 如何查找外部模块
import commonjs from "@rollup/plugin-commonjs" // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import vue from "rollup-plugin-vue" // 打包 vue
import babel from "@rollup/plugin-babel" // rollup 的 babel 插件，ES6转ES5
// 编译 typescript 的插件, 编译 ts 到js
// 会继承tsconfig.json的选项
// import typescript from "@rollup/plugin-typescript"

const config = {
    input: "src/index.ts",
    output: {
        // 有没有name 无所谓, 反正都是默认导出
        // name: "vue-rollup-component-template",
        file: "dist/vue-rollup-component-template.esm.js",
        format: "esm",
    },
    plugins: [
        nodeResolve({ extensions: ["vue"] }),
        babel({
            exclude: 'node-modules/**',
            extensions: ['.js', 'ts'],
            presets: [
                "@babel/preset-env",
                // {
                //     useBuiltIns: "usage",
                //     corejs: {
                //         version: 3,
                //         proposals: true, // 使用尚在“提议”阶段特性的 polyfill
                //     },
                // },
                "@babel/preset-typescript",
            ],
            // babelHelpers: 'bundled' option was used by default. It is recommended to configure this option explicitly, read more here: https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
            babelHelpers: "bundled",
        }),
        commonjs(),
        vue(),

        // typescript(),
    ],
}
export default config
