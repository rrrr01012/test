//連接坿用來幫伺服器中的應用程式定位
//通常默認用80 不要使用
//通常會用 3000 5000
//可以同時開啟多個不同的連接坿的服務
var http = require('http');

var server = http.createServer();

server.on('request',function(req,res){
    var url = req.url;
  
    if(url === '/plain'){
        res.setHeader('Content-Type','text/plain ; charset=utf-8');
        res.end('你好');
    }
    else if(url === '/html'){
        res.setHeader('Content-Type','text/html ; charset=utf-8');
        res.end('<p>安安 <a href="">點我</a></p>')
    }
})
server.listen(3000,function(){
    console.log('server is running');
})