/** @type {import('rollup').RollupOptions} */
// https://segmentfault.com/a/1190000019744295

export default {
    input: "src/index.js",
    output: [
        // esm es6 模式 iife(Immediately-invoked function expression ) 立即调用模式
        // AMD CommonJS  UMD
        {
            // https://www.rollupjs.com/guide/big-list-of-options
            // exports: "named", // 高危选项
            //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
            // name 不要有中横杠, 要转成一个变量名, 中横杠不是合法的变量名
            name: "VueRollupComponentTemplate", // 代表你的 iife/umd 包，同一页上的其他脚本可以访问它
            file: "dist/vue-rollup-component-template.browser.js", // 输出文件, 必须
            format: "iife", // 五种格式一种, 必须
            // sourcemap:true  //生成bundle.map.js文件，方便调试
        },
        {
            // 有没有name 无所谓, 反正都是默认导出
            // name: "vue-rollup-component-template",
            file: "dist/vue-rollup-component-template.esm.js",
            format: "esm",
        },
        {
            //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
            name: "vue-rollup-component-template",
            file: "dist/vue-rollup-component-template.umd.js",
            format: "umd",
        },
    ],
}
