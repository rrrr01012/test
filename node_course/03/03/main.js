require('./a') 
var fn = require('./b') 
//不會重複執行此代碼
console.log(fn);