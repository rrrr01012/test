 var http = require('http');
 var fs = require('fs');
 var server = http.createServer();
 var wwwdir='F:/start/www';
 server.on('request', function (req, res){
    var url = req.url;
    if (url === '/'){
        fs.readFile(wwwdir + '/index.html',function (err,data) {
            if (err){
                return res.end('404 not found')
            }
            res.end(data);
        })
    }
 })

 server.listen(3000, function () {
    console.log('running...')
  })
  
 