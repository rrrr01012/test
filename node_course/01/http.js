var http = require('http');
var server = http.createServer();
server.on('request',function(){
    console.log('收到請求');
})
server.listen(3000,function(){
    console.log("伺服器啟用成功可用127.0.0.1:3000啟用")
});