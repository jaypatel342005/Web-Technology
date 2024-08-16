const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>Home Page</h1>
          <button onclick="location.href='/about'">Go to About</button>
          <button onclick="location.href='/contact'">Go to Contact</button>
        </body>
      </html>
    `);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>About Page</h1>
          <button onclick="location.href='/home'">Go to Home</button>
          <button onclick="location.href='/contact'">Go to Contact</button>
        </body>
      </html>
    `);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>Contact Page</h1>
          <button onclick="location.href='/home'">Go to Home</button>
          <button onclick="location.href='/about'">Go to About</button>
        </body>
      </html>
    `);
  }
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>404 Not Found</h1>
          <button onclick="location.href='/home'">Go to Home</button>
        </body>
      </html>
    `);
  }
});

server.listen(4000, () => {
  console.log("Server started on port 4000");
});
