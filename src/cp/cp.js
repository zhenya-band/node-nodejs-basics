import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToScript = path.join(__dirname, '/files/script.js');

const spawnChildProcess = async (args) => {
    fork(pathToScript, args);
};

spawnChildProcess(["test1", "test2"]);