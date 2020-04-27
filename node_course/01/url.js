var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
    console.log("收到請求請求路徑是:" + req.url)
    var url = req.url;
    if(url === '/'){   //url 預設/ 都是以/開頭 
        res.end("index page");
    }
    else if(url === '/login'){
        res.end("login page");
    }
    else{
        res.end("404 not found");
    }
})

server.listen(80,function(){
    console.log("伺服器啟用成功");
})