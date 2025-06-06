// console.log("hello world");
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colors in CSS</title>
    <style>
        #firstpara {
            color: red; /*color by name */
        }
        #secondpara {
            color: rgb(16, 175, 220) /*color by rgb value*/
        }
        #thirdpara{
            color: #ff3456 /*color by hex value*/
        }
    </style>
</head>

<body>
    <h2>This is my first box</h2>
    <p id="firstpara">This paragraph from first box</p>

    <h2>This is my first box</h2>
    <p id="secondpara">This paragraph from second box</p>

    <h2>This is my first box</h2>
    <p id="thirdpara">This paragraph from third box</p>

</body>

</html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});