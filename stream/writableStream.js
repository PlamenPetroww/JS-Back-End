const fs = require('fs');

const writeStream = fs.createWriteStream('./output.txt', {encoding: 'utf-8'});

const chunk1 = 'Georg';
const chunk2 = 'Peter';
const chunk3 = 'Jork';

writeStream.write(chunk1 + '\n');
writeStream.write(chunk2 + '\n');
writeStream.write(chunk3 + '\n');

writeStream.on('close', () => {
    console.log('Stop');
});

writeStream.end()

