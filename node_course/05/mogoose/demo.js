const mongoose = require('mongoose');

//連接Mongodb資料庫
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//創建一個模型
//設計資料庫
//mongodb是動態的，非常靈活，只需要在程式碼中設計資料庫就可以了
//mongoose這個包可以讓設計過程變得簡單
const Cat = mongoose.model('Cat', { name: String });

//實例化一個cat
const kitty = new Cat({ name: 'Zildjian' });
//持久化實例kitty
kitty.save().then(() => console.log('meow'));



// -mongo -show db -use test -show collections -db.cats.find()