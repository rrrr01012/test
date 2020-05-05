var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var comments = [
    {
        name: '貓貓',
        message: '安安',
        dateTime: '2020/4/29'
    }


] 

app.use('/public/',express.static('./public/'))
app.engine('html',require('express-art-template'))
//專們用來解析表單
app.use(bodyParser.urlencoded({extended: false}))
//res.render('html模板名',{模板數據})
//默認views目錄
//若想修改默認目錄可以
// app.set('views',render默認函數的路徑)
app.get('/',function(req, res){
    res.render('index.html',{
        comments: comments
    })
})

app.get('/post',function(req, res){
    res.render('post.html')
})
// app.get('/pinglun',function(req, res){
//     var comment = req.query
//     console.log(req.query)
//     comment.dateTime = '2020-5-5'
//     comments.unshift(comment)
//     res.redirect('/')
// })使用post更合理
app.post('/post',function(req, res){
    var comment = req.body
    console.log(req.query)
    comment.dateTime = '2020-5-5'
    comments.unshift(comment)
    res.redirect('/')
})
//在express中沒有內至獲取post請求之api
//需要安裝第三方包 body-parser

app.listen(3000, function(){
    console.log('express is running.')
})