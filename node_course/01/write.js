var fs = require('fs');
fs.writeFile('./data/安安.txt' , '貓貓' , function(error){
    if(error){
        console.log("false")
    }
    console.log(error);//成功error會表示null
    console.log('success write');
});