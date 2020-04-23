var http = require('http');
var server = http.createServer();
//request 獲取用戶端的請求訊息
//response 給用戶端發送回應訊息
server.on('request',function(request,response){
    console.log('收到請求,請求路徑:'+ request.url);// 127.0.0.1:3000/url
    response.write('hello ')
    response.write('node js')
    var url = request.url;
    if(url === '/index'){
        response.write("index");
        response.end();
    }
    response.end();

})
server.listen(3000,function(){
    console.log("伺服器啟用成功可用127.0.0.1:3000啟用")
});