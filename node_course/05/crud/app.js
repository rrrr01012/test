// //app.js入口模塊
// //職責:
//     啟動服務
//     做一些相關配置
//      模板引擎
//      解析表單
//      提供靜態服務
//     掛載路由
var bodyParser = require('body-parser')
var express = require('express')
var fs = require('fs')
var router = require('./router')
var app = express()
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
app.engine('html', require('express-art-template'))
//body parser一定要再掛載路由之前
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(router)//把路由容器掛載到app服務中
  

app.listen(3000, function () {
    console.log('running 3000 ...')
})
module.exports = app