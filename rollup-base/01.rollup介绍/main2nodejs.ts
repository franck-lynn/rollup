const print =  () =>{
    console.log("转译给 nodejs 用")
} 
print()
export {}

// 命令: rollup main2nodejs.ts --file dist/bundule-nodejs.js --format cjs
// 转译给浏览器和 Node.js
// rollup main2nodejs.ts --file dist/bundle.js --format umd --name "myBundle"