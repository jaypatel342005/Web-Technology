const os = require('os');
const crypto = require('crypto');
const url = require('url');

// 1. OS Module
console.log('OS Module:');
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Home Directory: ${os.homedir()}`);

// Additional OS methods
console.log(`Temporary Directory: ${os.tmpdir()}`); // Temporary directory path
console.log(`Uptime: ${os.uptime()} seconds`); // System uptime in seconds
console.log(`Network Interfaces: ${JSON.stringify(os.networkInterfaces(), null, 2)}`); // Network interfaces
console.log('');

// 2. Crypto Module
console.log('Crypto Module:');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encrypting data
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, World!', 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log(`Encrypted: ${encrypted}`);

// Decrypting data
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log(`Decrypted: ${decrypted}`);

// Additional Crypto methods
const hash = crypto.createHash('sha256');
hash.update('Some data');
console.log(`SHA-256 Hash: ${hash.digest('hex')}`); // Hashing data

const hmac = crypto.createHmac('sha256', key);
hmac.update('Some data');
console.log(`HMAC: ${hmac.digest('hex')}`); // Creating HMAC

console.log('');

// 3. URL Module
console.log('URL Module:');
const myUrl = new URL('https://www.example.com:8000/path/name?query=123#hash');

// Parse URL
console.log(`Href: ${myUrl.href}`);
console.log(`Host: ${myUrl.host}`);
console.log(`Hostname: ${myUrl.hostname}`);
console.log(`Port: ${myUrl.port}`);
console.log(`Pathname: ${myUrl.pathname}`);
console.log(`Search: ${myUrl.search}`);
console.log(`Hash: ${myUrl.hash}`);

// Additional URL methods
const base = 'https://www.example.com/path/';
const relative = 'subpath?query=456';
const resolvedUrl = url.resolve(base, relative);
console.log(`Resolved URL: ${resolvedUrl}`); // Resolving relative URL

const urlObject = url.parse('https://www.example.com/path/name?query=123#hash');
const formattedUrl = url.format(urlObject);
console.log(`Formatted URL: ${formattedUrl}`); // Formatting URL

const newUrl = new URL('https://www.example.com/path?query=123');
newUrl.searchParams.append('newParam', 'newValue');
console.log(`Updated URL with new query parameter: ${newUrl.href}`); // Updating query parameters
