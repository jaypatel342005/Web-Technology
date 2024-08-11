const path = require('path');

// Example Windows path
const examplePath = 'C:\\College programming\\Web-Technology\\Lab 17\\path.txt';

// Get the base name of the path
const baseName = path.basename(examplePath);
console.log(`Base Name: ${baseName}`); // Output: path.txt

// Get the directory name of the path
const dirName = path.dirname(examplePath);
console.log(`Directory Name: ${dirName}`); // Output: C:\College programming\Web-Technology\Lab 17

// Get the extension of the path
const extName = path.extname(examplePath);
console.log(`Extension Name: ${extName}`); // Output: .txt

// Join multiple path segments
const joinedPath = path.join('C:\\College programming', 'Web-Technology', 'Lab 17', 'path.txt');
console.log(`Joined Path: ${joinedPath}`); // Output: C:\College programming\Web-Technology\Lab 17\path.txt

// Resolve a sequence of paths into an absolute path
const resolvedPath = path.resolve('College programming', 'Web-Technology', 'Lab 17', 'path.txt');
console.log(`Resolved Path: ${resolvedPath}`); // Output will vary based on the current directory

// Parse the path into an object
const parsedPath = path.parse(examplePath);
console.log(`Parsed Path: ${JSON.stringify(parsedPath, null, 2)}`);
// Output:
// {
//   "root": "C:\\",
//   "dir": "C:\\College programming\\Web-Technology\\Lab 17",
//   "base": "path.txt",
//   "ext": ".txt",
//   "name": "path"
// }

// Format a path object into a string
const formattedPath = path.format(parsedPath);
console.log(`Formatted Path: ${formattedPath}`); // Output: C:\College programming\Web-Technology\Lab 17\path.txt

// Check if a path is absolute
const isAbsolutePath = path.isAbsolute(examplePath);
console.log(`Is Absolute Path: ${isAbsolutePath}`); // Output: true

// Get the relative path from one path to another
const relativePath = path.relative('C:\\College programming', 'C:\\College programming\\Web-Technology\\Lab 17\\path.txt');
console.log(`Relative Path: ${relativePath}`); // Output: Web-Technology\Lab 17\path.txt

// Normalize a path
const messyPath = 'C:\\College programming\\Web-Technology\\Lab 17\\..\\Lab 17\\path.txt';
const normalizedPath = path.normalize(messyPath);
console.log(`Normalized Path: ${normalizedPath}`); // Output: C:\College programming\Web-Technology\Lab 17\path.txt
