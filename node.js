const fs = require('fs'); // Import file system module
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const filePath = 'data.txt'; // Path to the file

const server = http.createServer((req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500; // Internal Server Error
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error reading file!');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
