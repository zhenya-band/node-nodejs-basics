import path from 'path';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const pathToFile = path.join(__dirname, '/files/fileToRead.txt');
    const readStream = createReadStream(pathToFile, 'utf8');
    readStream.pipe(process.stdout);
};

await read();