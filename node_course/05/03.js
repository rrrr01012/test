var fs =require('fs')

fs.readFile('./a.txt',function(err,data){
    if(err){
        throw err //兩個功能 1阻止程式執行 2 把錯誤訊息顯示在控制台
    }
    console.log(data.toString())
    fs.readFile('./b.txt',function(err,data){
        if(err){
            throw err //兩個功能 1阻止程式執行 2 把錯誤訊息顯示在控制台
        }
        console.log(data.toString())
        fs.readFile('./c.txt',function(err,data){
            if(err){
                throw err //兩個功能 1阻止程式執行 2 把錯誤訊息顯示在控制台
            }
            console.log(data.toString())
        })
    })
})

/////為了保證順序 而導致回調地獄