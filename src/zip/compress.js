import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const pathToFileToCompress = path.join(__dirname, './files/fileToCompress.txt');
    const destPath = path.join(__dirname, 'files/archive.gz');

    try {
        await pipeline(
            createReadStream(pathToFileToCompress),
            createGzip(),
            createWriteStream(destPath)
          );
          await unlink(pathToFileToCompress);
    } catch (error) {
        console.log(error);
    }
};

await compress();