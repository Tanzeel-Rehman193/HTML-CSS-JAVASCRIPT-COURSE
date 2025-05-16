const http = require('http')
const fs = require('fs');
const fileContent = fs.readFileSync('tut51.html')

const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 80;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(fileContent);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});