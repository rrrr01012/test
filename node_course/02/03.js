var http = require('http');
var fs = require('fs');
var server = http.createServer();
var wwwdir='F:/start/www';
server.on('request', function (req, res){
   var url = req.url;
   var filepath = '/index.html';
   if (url !== '/'){
        filepath = url;
   }
   fs.readFile('./template.html', function (err ,data) {
       if (err) {
           return res.end('404 not found');
       }
       fs.readdir(wwwdir,function(err,files){
           if(err){
            return res.end('can not found www dir');
           }
           var content = '';
           files.forEach(function(item){
               content += `
               <tr>
                <td data-value="index.html">
                    <a class="icon file" draggable="true" href="/F:/start/www/index.html">${item}</a>
                </td>
                <td class="detailsColumn" data-value="76">76 B</td><td class="detailsColumn" data-value="1588078857">2020/4/28 下午9:00:57
                </td>
               </tr>

               `
           })
           data = data.toString();
           data = data.replace('QQ',content);
           res.end(data);
       })
       
   })
})

server.listen(3000, function () {
   console.log('running...')
 })
 