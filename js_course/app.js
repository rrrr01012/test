b();
console.log(a);         //變數會預設undefine

var a;          //mem中載入一個undefined變數a
if(a===undefined){
    console.log("a is undefined .");
}
else{
    console.log("a is defined .");
}

function b(){
    console.log('Call b!');  //js的function code會預先載入mem中
}
