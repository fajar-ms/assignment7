const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
  let filePath = req.url === '/' ? 'myweb.html' : req.url.substring(1);

  const ext = path.extname(filePath);
  let contentType = 'text/html';

  switch (ext) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    default:
      contentType = 'text/html';
  }

  fs.readFile(filePath, (err, data) => {

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data)
  });
}).listen(8080);

console.log('Server running at http://localhost:8080/');