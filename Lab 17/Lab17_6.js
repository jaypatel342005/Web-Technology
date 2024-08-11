// Importing required core modules
const assert = require('assert'); // Provides assertion functions
const events = require('events'); // Provides event-driven programming
const stream = require('stream'); // Provides stream interfaces
const dns = require('dns'); // Provides DNS resolution functions
const zlib = require('zlib'); // Provides compression utilities
const timers = require('timers'); // Provides timer functions
const util = require('util'); // Provides utility functions
const querystring = require('querystring'); // Provides query string utilities
const readline = require('readline'); // Provides an interface for reading input
const vm = require('vm'); // Provides a way to execute code within V8 virtual machine contexts
const http2 = require('http2'); // Provides HTTP/2 functionality
const dgram = require('dgram'); // Provides UDP datagram sockets
const { Worker, isMainThread, parentPort } = require('worker_threads'); // Provides threads for parallelism

// 1. Assert Module
console.log('Assert Module:');

// Assertion for strict equality
assert.strictEqual(2 + 2, 4, '2 + 2 should equal 4'); // Passes if 2 + 2 equals 4

// Assertion for deep equality
const obj1 = { a: 1 };
const obj2 = { a: 1 };
assert.deepStrictEqual(obj1, obj2, 'Objects should be deeply equal'); // Passes if objects are deeply equal

// Assertion for expected errors
assert.throws(() => {
  throw new Error('This is an error'); // Throws an error
}, /error/, 'Expected error not thrown'); // Passes if the function throws an error matching the regex

console.log('Assertions passed.\n');

// 2. Events Module
console.log('Events Module:');

// Create an EventEmitter instance
const emitter = new events.EventEmitter();

// Listener for 'message' event
emitter.on('message', (text) => {
  console.log(`Message event received: ${text}`); // Logs message when 'message' event is emitted
});

// Emit 'message' event
emitter.emit('message', 'Hello, Events!'); // Triggers the 'message' event with the given text

// One-time listener for 'oneTimeEvent'
const onceListener = (text) => {
  console.log(`One-time event received: ${text}`); // Logs message when 'oneTimeEvent' is emitted
};
emitter.once('oneTimeEvent', onceListener);
emitter.emit('oneTimeEvent', 'This will be logged'); // This will trigger the one-time listener
emitter.emit('oneTimeEvent', 'This will not be logged'); // This will not trigger the listener

console.log('');

// 3. Stream Module
console.log('Stream Module:');

// Readable stream example
const readable = new stream.Readable({
  read() {} // Implement read() method for readable stream
});
readable.push('Hello, '); // Push data into the readable stream
readable.push('Stream!'); // Push more data
readable.push(null); // End the stream by pushing null

// Writable stream example
const writable = new stream.Writable({
  write(chunk, encoding, callback) {
    console.log(`Write: ${chunk.toString()}`); // Logs data written to the writable stream
    callback(); // Signal that writing is complete
  }
});

// Transform stream example
const transform = new stream.Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase()); // Convert data to uppercase and pass it to the next stream
  }
});

// Pipe the readable stream through the transform stream and into the writable stream
readable.pipe(transform).pipe(writable).on('finish', () => {
  console.log('Pipeline finished'); // Logs when the pipeline is finished
}).on('error', (err) => {
  console.error(`Pipeline error: ${err.message}`); // Logs any errors in the pipeline
});

console.log('');

// 4. DNS Module
console.log('DNS Module:');

// Resolve DNS for a domain name
dns.resolve('example.com', (err, addresses) => {
  if (err) {
    console.error(`Error: ${err.message}`); // Logs error if DNS resolution fails
    return;
  }
  console.log(`Resolved addresses: ${addresses}`); // Logs resolved addresses
});

// Reverse lookup to get domain from IP
dns.reverse('93.184.216.34', (err, hostnames) => {
  if (err) {
    console.error(`Error: ${err.message}`); // Logs error if reverse lookup fails
    return;
  }
  console.log(`Reverse lookup hostnames: ${hostnames}`); // Logs hostnames for the given IP address
});

console.log('');

// 5. Zlib Module
console.log('Zlib Module:');

// Compress data using gzip
const input = 'Some data to compress';
zlib.gzip(input, (err, buffer) => {
  if (err) {
    console.error(`Error: ${err.message}`); // Logs error if compression fails
    return;
  }
  console.log(`Compressed: ${buffer.toString('base64')}`); // Logs compressed data in base64 format

  // Decompress data
  zlib.gunzip(buffer, (err, decompressed) => {
    if (err) {
      console.error(`Error: ${err.message}`); // Logs error if decompression fails
      return;
    }
    console.log(`Decompressed: ${decompressed.toString()}`); // Logs decompressed data
  });
});

// Using the createGzip and createGunzip streams
const gzipStream = zlib.createGzip(); // Create a gzip transform stream
const gunzipStream = zlib.createGunzip(); // Create a gunzip transform stream
const inputStream = new stream.Readable({
  read() {} // Implement read() method for the input stream
});
inputStream.push('Some more data to compress');
inputStream.push(null);

// Pipe data through gzip and gunzip streams
inputStream.pipe(gzipStream).pipe(gunzipStream).on('data', (chunk) => {
  console.log(`Processed stream data: ${chunk.toString()}`); // Logs processed data
}).on('error', (err) => {
  console.error(`Stream error: ${err.message}`); // Logs any errors in the stream
});

console.log('');

// 6. Timers Module
console.log('Timers Module:');

// Set a timeout to execute a function after a delay
timers.setTimeout(() => {
  console.log('This message is delayed by 1 second'); // Logs message after 1 second
}, 1000);

// Set an immediate to execute a function immediately after the current event loop
timers.setImmediate(() => {
  console.log('This message is executed immediately'); // Logs message immediately
});

// SetInterval example to execute a function repeatedly at intervals
const intervalId = timers.setInterval(() => {
  console.log('This message is logged every 2 seconds'); // Logs message every 2 seconds
}, 2000);

// Clear the interval after 5 seconds
timers.setTimeout(() => {
  timers.clearInterval(intervalId); // Clears the interval
  console.log('Interval cleared'); // Logs message indicating interval has been cleared
}, 5000);

console.log('');

// 7. Util Module
console.log('Util Module:');

// Inspect an object
const obj = { a: 1, b: 'text', c: true };
console.log(`Inspect: ${util.inspect(obj, { showHidden: false, depth: null })}`); // Logs a detailed string representation of the object

// Format a string
console.log(`Format: ${util.format('The number is %d and the string is %s', 42, 'example')}`); // Formats and logs a string with placeholders

// Promisify a function (convert callback-based function to a promise-based one)
const fs = require('fs'); // Import fs module for file operations
const readFile = util.promisify(fs.readFile); // Convert fs.readFile to return a promise

readFile('example.txt', 'utf8') // Read file content
  .then(data => console.log(`File content: ${data}`)) // Logs file content
  .catch(err => console.error(`Error: ${err.message}`)); // Logs error if file read fails

console.log('');

// 8. Querystring Module
console.log('Querystring Module:');

// Parse a query string into an object
const query = 'name=John&age=30&city=New+York';
const parsedQuery = querystring.parse(query);
console.log(`Parsed Query: ${JSON.stringify(parsedQuery)}`); // Logs the parsed query string as an object

// Stringify an object into a query string
const stringifiedQuery = querystring.stringify({ name: 'Jane', age: 25, city: 'Los Angeles' });
console.log(`Stringified Query: ${stringifiedQuery}`); // Logs the object as a query string

console.log('');

// 9. Readline Module
console.log('Readline Module:');

// Create an interface to read input from stdin and write to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for input
rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`); // Logs user input
  rl.close(); // Close the readline interface
});

console.log('');

// 10. VM Module
console.log('VM Module:');

// Create a new V8 virtual machine context
const context = { a: 1, b: 2 };
const script = new vm.Script('a + b'); // Compile a script
const result = script.runInNewContext(context); // Execute the script in the given context
console.log(`VM Script Result: ${result}`); // Logs the result of the script execution

console.log('');

// 11. HTTP/2 Module
console.log('HTTP/2 Module:');

// Create an HTTP/2 server
const server = http2.createServer((req, res) => {
  res.end('Hello, HTTP/2!'); // Respond with a simple message
});

// Start the server
server.listen(8443, () => {
  console.log('HTTP/2 server listening on port 8443');
});

console.log('');

// 12. Datagram Module
console.log('Datagram Module:');

// Create a UDP socket
const udpSocket = dgram.createSocket('udp4');

// Handle incoming messages
udpSocket.on('message', (msg, rinfo) => {
  console.log(`Received message: ${msg} from ${rinfo.address}:${rinfo.port}`); // Logs received message
});

// Bind the socket to a port
udpSocket.bind(41234, () => {
  console.log('UDP socket listening on port 41234');
});

// Send a test message
udpSocket.send('Hello, UDP!', 41234, 'localhost', (err) => {
  if (err) {
    console.error(`Error sending message: ${err.message}`); // Logs error if sending fails
  } else {
    console.log('Message sent'); // Logs success message
  }
});

console.log('');

// 13. Worker Threads Module
console.log('Worker Threads Module:');

// If this is the main thread, create a worker
if (isMainThread) {
  const worker = new Worker(__filename); // Create a new worker thread running this file

  // Handle messages from the worker
  worker.on('message', (msg) => {
    console.log(`Message from worker: ${msg}`); // Logs message from the worker
  });

  // Post a message to the worker
  worker.postMessage('Hello from main thread');

} else {
  // Worker thread code
  parentPort.on('message', (msg) => {
    console.log(`Message from main thread: ${msg}`); // Logs message from the main thread
    parentPort.postMessage('Hello from worker thread'); // Send a message back to the main thread
  });
}

console.log('');





