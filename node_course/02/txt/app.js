var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url');
var comments = [
    {
        name: '貓貓',
        message: '安安',
        dateTime: '2020/4/29'
    }


] 

// /pinglun?name=貓貓&message=說你好安安 對於這種URL路徑無法使用字串處理去抓取其評論內容
//掩飾 08方法
http.createServer(function (req, res) {
    var parseobj = url.parse(req.url, true);
    var pathname = parseobj.pathname;
    //看08
    if (pathname === '/') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return res.end('404 not found');
            }
            var htmlstr = template.render(data.toString(), {
                comments:comments
            })
            res.end(htmlstr);
        })
    } else if (pathname.indexOf('/public/') === 0) { //讀取css文件用
        fs.readFile('.' + pathname, function (err, data) {
            if (err) {
                return res.end('404 not found');
            }
            res.end(data);
        })
    } else if (pathname === '/post') {
        fs.readFile('./views/post.html', function (err, data) {
            if (err) {
                return res.end('404 not found');
            }
            res.end(data);
        })
     } else if (pathname === '/pinglun') {
        //res.end(JSON.stringify(parseobj.query));
        var comment = parseobj.query;
        comment.dateTime = '2020-4-29';
        comments.unshift(comment);
        res.statusCode = 302; //重定向 302為臨時重定向 301 為永久重定向
        res.setHeader('Location', '/'); //通過location告訴前端，若前端看到status為302會重新更新。
        res.end();

    }
    else {
        fs.readFile('./views/404.html', function (err, data) {
            if (err) {
                return res.end('404 not found');
            }
            res.end(data);
        })
    }

}).listen(3000, function () {
    console.log('running....')
})