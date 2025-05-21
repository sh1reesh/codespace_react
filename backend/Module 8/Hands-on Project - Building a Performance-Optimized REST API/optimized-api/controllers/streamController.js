const fs = require('fs');
const path = require('path');

exports.streamLargeFile = (req, res) => {
    const filePath = path.join(__dirname, '../data/large-file.txt');
    const readStream = fs.createReadStream(filePath);

    res.setHeader('Content-Type', 'text/plain');
    readStream.pipe(res);

    readStream.on('error', err => {
        res.status(500).json({ message: 'Error reading file', error: err.message });
    });
};
