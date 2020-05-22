var fs = require('fs')

var p1 = new Promise(function (resolve, reject) {
    fs.readFile('./a.txt', function (err, data) { //pending狀態
        if (err) {
            reject(err)   //失敗調用
        }
        else {
            resolve(data.toString()) //成功調用
        }
    })
})
//then方法接收的function就是resolve 第二個function就是reject
p1.then(function (data) {
    console.log(data)
}, function (err) {
    console.log("讀取文件失敗",err)
})