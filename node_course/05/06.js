var fs = require('fs')

var p1 = new Promise(function (resolve, reject) {
    fs.readFile('./a.txt', function (err, data) {
        if (err) {
            reject(err)
        }
        else {
            resolve(data.toString())
        }
    })
})
var p2 = new Promise(function (resolve, reject) {
    fs.readFile('./b.txt', function (err, data) {
        if (err) {
            reject(err)
        }
        else {
            resolve(data.toString())
        }
    })
})

var p3 = new Promise(function (resolve, reject) {
    fs.readFile('./c.txt', function (err, data) {
        if (err) {
            reject(err)
        }
        else {
            resolve(data.toString())
        }
    })
})


p1.
    then(function (data) {
        console.log(data)
        //當p1讀取成功的時候
        // 當前函數中return的結果就可以在後面的then function接收到
        // 當return 123後面就接收到123
        // 可以return一個promise物件
        // 當Return一個promise物件的時候，後面的then中的finction會變成p2
        return p2
    }, function (err) {
        console.log("讀取文件失敗", err)
    })
    .then(function(data){
        console.log(data)
        return p3
    })
    .then(function(data){
        console.log(data)
    })
