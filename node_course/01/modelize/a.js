var foo = 'aaa';
console.log("a start");
//執行b
require('./b.js'); //.js可省略 ， ./是相對路徑不可省略
console.log(("a end"));
console.log(foo);//foo 沒被b更改
var bexport = require('./b.js');
console.log(bexport.foo); //從b的export中拿到
console.log(bexport.add(3,5));