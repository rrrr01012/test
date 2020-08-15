 function add(x,y,callback){
    console.log(1)
    setTimeout(() => {
        console.log(2)
        var ret = x + y
        callback(ret)
    }, 1000);
 }
function res(ret){
    console.log(ret)
}
 add(20,10,res)



 
 console.log(add)
//  add(20,10,function res(ret){
//      console.log(ret)
//  })
 console.log(3)

