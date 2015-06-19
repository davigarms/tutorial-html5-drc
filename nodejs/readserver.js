var html,
    http = require('http'),
    fs = require('fs');

fs.readFile('./page.html', function(err, buffer){
    html = buffer.toString();
});

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(html);
    response.end();
}).listen(8080);

console.log('Server on URL localhost and PORT 8080');