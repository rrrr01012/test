var http = require("http"); 
var url=require("url");
function start() {
    http.createServer(function (request, response) { //在這創一個匿名函數
        response.setHeader("Content-Type","text/html;charset=UTF-8");
        if(request.url=="/"){ //利用url做分頁
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("home");
            response.end();
        }
        else if(request.url=="/music.html"){//偽裝成html文件，因為node.js沒有Apache功能
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("music");
            response.end();
        }
        else{
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("no channel");
            response.end();
        }
        var pathname=url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received."); //回報url位置
        route
    }).listen(8888); //對這個server做監聽
    console.log("server has started!");
}  //把創建server放入一個函數，讓其他檔案去call它
exports.start = start;