var fs = require('fs')
function pReadfile(filepath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filepath, function (err, data) { //pending狀態
            if (err) {
                reject(err)   //失敗調用
            }
            else {
                resolve(data.toString()) //成功調用
            }
        })
    })
}

pReadfile('./a.txt')
    .then(function(data){
        console.log(data)
        return pReadfile('./b.txt')
    })
    .then(function(data){
        console.log(data)
        return pReadfile('./c.txt')
    })
    .then(function(data){
        console.log(data)
    })

//