import fs from 'fs'
import { cp } from 'fs/promises'
import path from 'path';

const __dirname = path.resolve();

export const copy = async () => {
    const srcPath = path.join(__dirname, 'src/fs/files')
    const destinationPath = path.join(__dirname, 'src/fs/files_copy')

    if (fs.existsSync(destinationPath)) {
        throw Error('FS operation failed');
    }

    try {
        await cp(srcPath, destinationPath, { recursive: true })
    } catch (error) {
        throw Error('FS operation failed');
    }
};

copy();