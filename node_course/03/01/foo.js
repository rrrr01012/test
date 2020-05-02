var foo = 'bar';
function add(x,y){
    return x + y;
}
//exports.add = add;
//exports.str = 'hello';
//exports = add;
module.exports = add;//直接把exports導出成add
module.exports = 'hello'; //會覆蓋上一個exports對象
//也可以導出多個成員
module.exports = {
    add : function(){
        return x + y
    },
    str : 'hello'
}
