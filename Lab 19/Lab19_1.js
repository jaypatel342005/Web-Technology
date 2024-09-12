// 1. Create a hello world webapp using ExpressJS. (A)

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1><b>Hello, World!</b></h1>');
});


app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});


