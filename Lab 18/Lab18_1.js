// 1. Create a hello world webapp using “http” core module in NodeJS. (A)
const http = require("http");

// Create an HTTP server

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello, World!</h1>\n");
});

// Listen on port 8080

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
