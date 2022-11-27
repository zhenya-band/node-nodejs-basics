import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const pathToFileToDecompress = path.join(__dirname, './files/archive.gz');
    const destPath = path.join(__dirname, './files/fileToCompress.txt');

    try {
        await pipeline(
            createReadStream(pathToFileToDecompress),
            createUnzip(),
            createWriteStream(destPath)
          );
        await unlink(pathToFileToDecompress);
    } catch (error) {
        console.log(error);
    }
};

await decompress();