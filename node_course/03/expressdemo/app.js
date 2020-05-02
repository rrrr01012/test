// 0.安裝
// 1.引包
var express = require('express')

var app = express() //創建server = http.creatserver
//當伺服器收到get請求/的時候，執行回調函數
app.get('/',function(req,res){
    res.send('hello express')
})
app.get('/about',function(req,res){
    console.log(req.query); //可以直接查詢字串參數
    res.send('你好我是express.') //不用處理中文 nb
})

//可以試試/a /b 之類的


//公開指定目錄 這樣就可以訪問public中的所有資源了
// 在express中開放一個資源就是一個api的事。
app.use('/public/',express.static('./public'))
app.use('/static/',express.static('./static'))
app.listen(3000,function(){
    console.log('app is running at port 3000.')
})