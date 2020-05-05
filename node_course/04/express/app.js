var express = require('express')
var app = express()
app.get('/', function(req,res){
    res.send('hello world')
})
//路由就是一張表
//表裡面有很多具體的映射關係
app.use('/public/',express.static('./public/')) //前面的public不是資料夾而只是url路徑名稱
//當以/public/開頭的時候，去/public/找對應的文件
//省略'/public/'可以不用加'/public/'在url中
app.get('/login', function(req,res){
    res.send('login hello')
})
app.listen(3000, function(){
    console.log('express is running.')
})