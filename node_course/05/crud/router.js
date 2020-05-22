//負責路由
//模塊任務單一且清晰
var fs = require('fs')

var Student = require('./student')
var express = require('express')

var router = express.Router()


router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('index.html', {
            fruits: [
                '蘋果',
                '香蕉',
                '葡萄'
            ],
            students: students
        })
    })
})



router.get('/students/new', function (req, res) {
    res.render('new.html')
})

router.post('/students/new', function (req, res) {
    //先獲取表單數據
    //處理
    //發出響應
    //先讀取然後轉成對象
    //往對象push數據
    //把對象轉成字串
    //把對象再次寫入
    new Student(req.body).save(function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    //在客戶端獲取處理鏈結<需要id參數>
    //獲取編輯學生id
    //渲染
    // res.render('edit.html',{

    // })
    //replace用正則表達式把全部" "換掉
    Student.findById(req.query.id.replace(/"/g, ''), function (err, student) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
            student: student
        })
    })
})

router.post('/students/edit', function (req, res) {
    var id = req.body.id.replace(/"/g, '')
    Student.findByIdAndUpdate(id,req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }

        res.redirect('/students')

    })
})
router.get('/students/delete', function (req, res) {
    var id = req.query.id.replace(/"/g, '')
    Student.findByIdAndRemove(id, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')

    })

})

module.exports = router


// module.exports = function(router){
//     router.get('/', function (req, res) {
//         fs.readFile('./db.json','utf8',function(err,data){
//             if(err){
//                 return res.status(500).send('server error.')
//             }

//             var students = JSON.parse(data).students
//             //從文件出來一定是字串
//             //一定要手動轉乘對象
//             res.render('index.html', {
//                 fruits: [
//                     '蘋果',
//                     '香蕉',
//                     '葡萄'
//                 ],
//                 students:students
//             })
//         })
//     })

//     router.get('/', function (req, res) {

//     })

//     router.get('/', function (req, res) {

//     })

//     router.get('/', function (req, res) {

//     })

//     router.get('/', function (req, res) {

//     })

// }
