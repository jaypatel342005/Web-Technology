// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it
// using http core module (C)

const http = require('http');
const fs = require('fs');

// Function to serve the content of the files
const serveFile = (fileName, res) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
};

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        serveFile('about.txt', res);
    } else if (req.url === '/contact') {
        serveFile('contact.txt', res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
