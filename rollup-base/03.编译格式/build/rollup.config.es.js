/** @type {import('rollup').RollupOptions} */
import base from "./rollup.config.base"
// 自执行 iife 模式, 适合浏览器
const config = Object.assign({}, base, {
    output: {
        // https://www.rollupjs.com/guide/big-list-of-options
        // exports: "named", // 高危选项
        // 有没有name 无所谓, 反正都是默认导出
        // name: "vue-rollup-component-template",
        file: "dist/vue-rollup-component-template.esm.js",
        format: "esm",
    },
})

export default config
