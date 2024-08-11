const fs = require("fs");

fs.writeFile("fs.txt", " Hello World  , ", (err) => {
  if (err) return console.error(err);
  console.log("File created successfully!");
});

fs.readFile("fs.txt", (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});

fs.appendFile("fs.txt", "   Hello, Node.js!", (err) => {
  console.log("Data appended successfully!");
});

fs.rename("fs.txt", "fs.txt", (err) => {
  console.log("File renamed successfully!");
});

// fs.unlink('fs.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted!');
//   });
