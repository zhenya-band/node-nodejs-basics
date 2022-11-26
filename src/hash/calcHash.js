import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises';
import path from 'path';

const __dirname = path.resolve();

const calculateHash = async () => {
    try {
        const pathToFile = path.join(__dirname, 'src/hash/files/fileToCalculateHashFor.txt');
        const content = await readFile(pathToFile, { encoding: 'utf8' })
        const hash = createHash('sha256').update(content).digest('hex');
        console.log(hash);
    } catch (error) {
        console.error(error);
    }
};

await calculateHash();