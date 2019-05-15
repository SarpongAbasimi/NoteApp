const httpServer = require('http-server')
,path = require('path');

var pathToHtmlAndJsFiles = path.join(__dirname, './');
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles});

console.log(pathToHtmlAndJsFiles )
server.listen(3000, function(){
  console.log('Yes boy, I am on');
});