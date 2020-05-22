var mongoose = require('mongoose')

//1.連接資料庫
//指定資料庫不需要存在
mongoose.connect('mongodb://localhost/itcast')

//2.設計集合結構(表結構)
//字段名稱就是表結構的屬性名稱
//值
//約束的目的是為了保證資料的完整性

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true // 必須有
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String
    }
})

//3.將文檔發布為模型
// mongoose.model 方法就是將一個架構發布為model
//  mongoose會自動將大寫名詞的字串自動生成小寫復數的集合名稱
//      例如這裡User 最終會變成  users 集合名稱
//返回值 : 模型構造函數
var User = mongoose.model('User', userSchema)

// 4. 當有了模型構造函數之後，就可以對users做增刪改查了
//-----新增-----
// var admin = new User({
//     username: '貓貓',
//     password: 'cat',
//     email: 'catlol'
// })

// admin.save(function(err,ret){
//     if(err){
//         console.log('保存失敗')
//     } else {
//         console.log('保存成功')
//         console.log(ret)
//     }
// })
//-----新增-----
//-----查詢-----
//查詢所有
// User.find(function(err,ret){
//     if(err){
//         console.log('查詢失敗')
//     } else {
//         console.log(ret)
//     }
// })
//查詢條件
// User.findOne({
//     username:'貓貓',       //若沒有條件只會跑出第一個資料
//     password:'cat'
// },function(err,ret){
//     if(err){
//         console.log('查詢失敗')
//     } else {
//         console.log(ret)
//     }
// })
//-----查詢-----


//-----刪除-----
// User.remove({
//     username: '貓貓',
// }, function (err, ret) {
//     if (err) {
//         console.log('刪除失敗')
//     } else {
//         console.log('刪除成功')
//         console.log(ret)
//     }
// })

//-----刪除-----

//-----更新-----
// User.findByIdAndUpdate('5ec54c3281eab25a20b89ba8',{
//     password:'12345'
// },function(err,ret){
//     if(err){
//         console.log("更新失敗")
//     } else {
//         console.log('更新成功')
//     }
// })
//-----更新-----