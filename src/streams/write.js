import path from 'path';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const write = async () => {
    const pathToFile = path.join(__dirname, '/files/fileToWrite.txt');
    const writeStream = createWriteStream(pathToFile, { encoding: 'utf8' });

    process.stdin.on('data', (data) => {
        writeStream.write(data)
    })
};

await write();