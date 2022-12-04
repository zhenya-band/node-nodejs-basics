import { readFile } from 'fs/promises';

import path from 'path';

const __dirname = path.resolve();

const read = async () => {
    const pathToFile = path.join(__dirname, 'src/fs/files/fileToRead.txt');
    try {
        const content = await readFile(pathToFile, { encoding: 'utf8' });
        console.log(content);
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await read();