import { unlink } from 'fs/promises';
import path from 'path';

const __dirname = path.resolve();

const remove = async () => {
    const pathToFile = path.join(__dirname, 'src/fs/files/fileToRemove.txt');
    try {
        await unlink(pathToFile)
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await remove();