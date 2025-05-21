// Basic Stream Setup
// Description: Create a basic readable and writable stream in Node.js and use it to read from `input.txt` and write to `output.txt`.

// Steps:
// 1. Use fs.createReadStream to create a readable stream from input.txt .
// 2. Use fs.createWriteStream to create a writable stream to output.txt .
// 3. Listen to the data event on readableStream to get data chunks and write them to writableStream .
// 4. Listen to end event to know when the reading is complete.


const fs = require('fs');

// Step 1: Create a readable stream from input.txt
const readableStream = fs.createReadStream('input.txt', 'utf-8');

// Step 2: Create a writable stream to output.txt
const writableStream = fs.createWriteStream('output.txt');

// Step 3: Listen to 'data' event to read chunks and write them to the writable stream
readableStream.on('data', (chunk) => {
    console.log('Reading chunk:', chunk);
    writableStream.write(chunk);
});

// Step 4: Listen to 'end' event to know when reading is complete
readableStream.on('end', () => {
    console.log('Finished reading from input.txt');
    writableStream.end(); // Good practice to close the writable stream
});

// Optional: Listen to 'finish' event on writable stream
writableStream.on('finish', () => {
    console.log('Finished writing to output.txt');
});

// Optional: Handle errors
readableStream.on('error', (err) => {
    console.error('Error reading:', err);
});
writableStream.on('error', (err) => {
    console.error('Error writing:', err);
});

