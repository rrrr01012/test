var template = require('art-template');
var fs = require('fs');
//template('script 標籤id ',{對象}) 瀏覽器用法
fs.readFile('./tpl.html', function (err, data) {
    if (err) {
        return console.log('讀取失敗');
    }


    var ret = template.render(data.toString(), {
        name: 'jack',
        age: 18,
        province: '台北'

    })
    console.log(ret);
})