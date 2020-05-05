var express = require('express')
var fs = require('fs')
var app = express()
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
app.engine('html', require('express-art-template'))
app.get('/', function (req, res) {
    //把讀取到的文件轉乘utf8，也可以用data.toString
    fs.readFile('./db.json','utf8',function(err,data){
        if(err){
            return res.status(500).send('server error.')
        }
        
        var students = JSON.parse(data).students
        //從文件出來一定是字串
        //一定要手動轉乘對象
        res.render('index.html', {
            fruits: [
                '蘋果',
                '香蕉',
                '葡萄'
            ],
            students:students
        })
    })
    })
  

app.listen(3000, function () {
    console.log('running 3000 ...')
})