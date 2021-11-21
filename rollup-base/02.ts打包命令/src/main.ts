import path from "path"
import { version } from "../package.json"

export function main(): void {
    console.log("version " + version)
    console.log(path.resolve())
}
main()

// 命令行编译
// 输出到控制台
// rollup src/main.js -f cjs
// rollup src/main.js -o dist/bundle.js -f cjs
// npm 执行命令 rollup --config rollup.config.ts --configPlugin typescript
