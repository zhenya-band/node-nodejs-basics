import { existsSync } from 'fs';
import { rename as renameFs } from 'fs/promises';

import path from 'path';

const __dirname = path.resolve();

export const rename = async () => {
    const originalPathToFile = path.join(__dirname, 'src/fs/files/wrongFilename.txt')
    const newPathToFile = path.join(__dirname, 'src/fs/files/properFilename.md')

    if (existsSync(newPathToFile)) {
        throw Error('FS operation failed');
    }

    try {
        await renameFs(originalPathToFile, newPathToFile);
    } catch (error) {
        throw Error('FS operation failed');
    }
};

rename();