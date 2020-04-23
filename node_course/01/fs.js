var fs = require('fs');
fs.readFile('./data/hello.txt',function(error, data){
    //console.log(data);
    //<Buffer 68 65 6c 6c 6f>
    //讀取到16進位數據
    if(error){
        console.log('read false');
        return;
    }
    console.log(data.toString());
    
});


