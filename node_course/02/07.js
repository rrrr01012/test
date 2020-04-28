var http = require('http')
var fs = require('fs')
var template = require('art-template');
var server = http.createServer()

var wwwdir='F:/start/www';

server.on('request', function (req, res) {
  var url = req.url
  fs.readFile('./template2.html', function (err, data) {
    if (err) {
      return res.end('404 Not Found.')
    }

    fs.readdir(wwwdir, function (err, files) {
      if (err) {
        return res.end('Can not find www dir.')
      }
    var htmlstr = template.render(data.toString(),{
        title:'哈哈',
        files:files
    })  
      res.end(htmlstr)
    })
  })
})
server.listen(3000, function () {
  console.log('running...')
})
