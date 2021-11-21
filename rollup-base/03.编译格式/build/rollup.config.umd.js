/** @type {import('rollup').RollupOptions} */
import base from "./rollup.config.base"
// 自执行 iife 模式, 适合浏览器
const config = Object.assign({}, base, {
    output: {
         // https://www.rollupjs.com/guide/big-list-of-options
        // exports: "named", // 高危选项
        //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
        name: "vue-rollup-component-template",
        file: "dist/vue-rollup-component-template.umd.js",
        format: "umd",
    },
})

export default config