let a = 10;
let b = 20;
// 默认导出
export default {
     a,
     b
}
// 按需导出  可以多次导出
export const x = 999;
export const y = 888;

// js文件都是一个单独的模块，模块与模块之间的数据是不能直接相互访问的
// 需要在被导入的js文件中  设置 export default 导出 export default 只能出现一次
// 在接收文件中 import别名from 'url地址'
// 在接收文件中的js中就可以访问到 被导入的js文件的属性