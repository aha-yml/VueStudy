// 默认导入
import m from './1.js';
// 按需导入 需要就导入，不需要就不导入
// {x as xx}  as可以定义别名
import {x,y} from './1.js'

console.log(m.a);
console.log(x);
console.log(y);