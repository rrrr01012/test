console.log( 3 < 2 < 1 ); //3<2先執行回傳 false
console.log(false<1); //Number(false)在console中使用 回傳0所以最後會回傳true
var a=3,b=4,c=5;
a=b=c;
console.log(a,b,c);
// null==0 false==0 試試看
var a = 0;
var b = false;
if (a == b) {
    console.log('they are equal'); //用雙等號會equal
}
else {
    console.log('they are not equal.'); // 用三等號會 not equal
}
///最好用三等號!!
var a;
a=0;
if(a || a === 0){
    console.log("somthing is there");
}

function greet(name){
    name = name||'<Your name here>' //設定預設值 若||前面有值則js引擎會優先回傳前面的值
    console.log(' hello '+ name);
}
greet('貓貓');
greet();
greet(0); //小心 