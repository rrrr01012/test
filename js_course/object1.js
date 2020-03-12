/*var person = new Object ();
person["firstname"]="Tony";
person["lastname"]="Mao";
console.log(person);
var firstnameproperty="firstname";
console.log(person[firstnameproperty]);
console.log(person.firstname);           //用.時js引擎會自動把後面的變數當成字串
console.log(person.lastname);
person.address = new Object();
person.address.street="中正路";
person.address.city="新北";
console.log(person.address.street);          
console.log(person.address.city);
console.log(person["address"]["city"]);
console.log(person);*/
//------------------------------------------------------------------------------------------------------------------------------------------
var person2={}; //js看到這個會直接當成new Object() 
var person2= {
    firstname:'Tony', 
    lastname:'Mao',
    address: {
        street:'中正路',
        city:'新北'  //最後一個不用,
    }               //這裡不用;or,
};                                     //這寫法叫做物件實體
//console.log(person2);
function greet(person){
    console.log('Hi  '+person.firstname);
}
greet(person2);
greet({
    firstname:'Elsa',
    lastname:'Windy'
});  //直接在function 丟一個物件進去 但會變成區域物件 js特有的
person2.address2={
    street2:'德和路'
}; //可直接在這更新物件
console.log(person2);//檢查是否更新