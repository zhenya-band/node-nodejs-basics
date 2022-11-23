import { readdir } from 'fs/promises';
import path from 'path';

const __dirname = path.resolve();

const list = async () => {
    const folderPath = path.join(__dirname, 'src/fs/files');

    try {
        const files = await readdir(folderPath);
        console.log(files);
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await list();