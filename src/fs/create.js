import { writeFile } from 'fs/promises';
import path from 'path';

const __dirname = path.resolve();

export const create = async () => {
    const content = 'I am fresh and young';
    const pathToFile = path.join(__dirname, 'src/fs/files/fresh.txt');

    try {
        await writeFile(pathToFile, content, { flag: 'wx' })
    } catch (error) {
        throw Error('FS operation failed');
    }
};

create()