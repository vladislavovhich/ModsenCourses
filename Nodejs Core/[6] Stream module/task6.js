const fs = require('fs');
const readableStream = fs.createReadStream('1.txt');
const writableStream = fs.createWriteStream('2.txt');

readableStream.pipe(writableStream)

readableStream.on('error', (err) => {
    console.error('Error reading file:', err)
});

writableStream.on('error', (err) => {
    console.error('Error writing file:', err)
});


writableStream.on('finish', () => {
    console.log('File has been copied successfully.')
});
