/** @type {import('rollup').RollupOptions} */
import base from "./rollup.config.base"
// 自执行 iife 模式, 适合浏览器
const config = Object.assign({}, base, {
    output: {
        // https://www.rollupjs.com/guide/big-list-of-options
        // exports: "named", // 高危选项
        //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
        // name 不要有中横杠, 要转成一个变量名, 中横杠不是合法的变量名
        name: "VueRollupComponentTemplate",  // 代表你的 iife/umd 包，同一页上的其他脚本可以访问它
        file: "dist/vue-rollup-component-template.browser.js", // 输出文件, 必须
        format: "iife",   // 五种格式一种, 必须
        // sourcemap:true  //生成bundle.map.js文件，方便调试
    },
})

export default config
