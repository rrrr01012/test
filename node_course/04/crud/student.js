//數據操作文件模塊
//職責:只處理數據不關係業務
var fs = require('fs')

var dbPath = './db.json'
//獲取所有學生列表
exports.find=function(callback){//callback函數 上層傳遞下層才執行
    fs.readFile(dbPath, 'utf8' ,function(err,data){
        if(err){
            return callback(err)
        }
        callback(null,JSON.parse(data).students)
    })
}
//根據id獲取學生對象
//
exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
      if (err) {
        return callback(err)
      }
      var students = JSON.parse(data).students
      var ret = students.find(function (item) {
        return item.id === id
      })
      callback(null, ret)
    })
  }

// find(function(err,data){

// })
//添加保存學生
exports.save=function(student, callback){
    fs.readFile(dbPath, 'utf8' ,function(err,data){
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data).students
        //處理id不重複
        student.id = students[students.length -1].id + 1
        //用戶傳遞到數組中
        students.push(student)
        //把對象轉成字串
        var fileData = JSON.stringify({
            students: students
        })
        //把字串保存到文件
        fs.writeFile(dbPath, fileData,function(err){
            if(err){
                return callback(err)
            }
            //成功了所以錯誤對象回傳null
            callback(null)
        })
    })
}
//更新學生
exports.updateById=function(student,callback){
    fs.readFile(dbPath, 'utf8' ,function(err,data){
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data).students
        //要修改誰就要把誰給找出來
        //ES6中的方法:find
        //需要接收一個函數作為參數
        var stu = students.find(function(item){
            return item.id === parseInt(student.id)
        })
        // stu.name = student.name
        // stu.age = student.age

        for(var key in student){
            stu[key] = student[key]
        }
        //把對象轉成字串
        var fileData = JSON.stringify({
            students: students
        })
        
        //把字串保存到文件
        fs.writeFile(dbPath, fileData,function(err){
            if(err){
                return callback(err)
            }
            //成功了所以錯誤對象回傳null
            callback(null)
        })
    })
}
//刪除學生
exports.deleteById=function(id,callback){
    fs.readFile(dbPath, 'utf8' ,function(err,data){
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data).students
       
        var deleteId = students.findIndex(function(item){
            return item.id ===parseInt(id)
        })

        students.splice(deleteId, 1) //刪除
        var fileData = JSON.stringify({
            students: students
        })
        //把字串保存到文件
        fs.writeFile(dbPath, fileData,function(err){
            if(err){
                return callback(err)
            }
            //成功了所以錯誤對象回傳null
            callback(null)
        })
    })
}