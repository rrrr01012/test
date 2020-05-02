/*var modules = {
    exports: {
        foo: 'bar'
    }
}
*/
//默認在node中有這樣一個modules

//exports.foo = 'bar';
exports.foo = 'bar';
//在模塊中還有一個這樣的程式碼
//***var exports = module.exports*** call by reference
module.exports.add = function(x,y){
    return x + y;
}
//兩種用法會一樣
//默認在程式碼最後會有一句
//***return module.exports***很重要
exports = 'hello' //對exports 重新賦予一個變數
//原本是call by reference 改成變數
//這樣不管用因為不會return exports


module.exports = 'hello';
exports.foo = 'world';
//這樣是給module.exports重新賦直
//因為最後還是return module.exports
//所以exports.foo還是不能用