function buildFunctions() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i);   
            }
        )
        
    }
    
    return arr;
}

var fs = buildFunctions();
//跑完時i=3 存了三個console.log(i)到arr i跟arr都儲存在buildfunctions的記憶體中 再由fs指向
fs[0](); //執行時 找到console.log(i)但不知道i的值，所以去範圍鏈找到i=3
fs[1]();
fs[2]();
//印出三次console.log(i) 因為i=3所以印三次3
function buildFunctions2() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);   
                }
            }(i)) //iife 會先執行
        )
        
    }
    
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();