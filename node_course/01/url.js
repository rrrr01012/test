var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
    console.log("收到請求請求路徑是:" + req.url)
    
})

server.listen(80,function(){
    console.log("伺服器啟用成功");
})