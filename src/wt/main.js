import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os'
import { Worker } from 'worker_threads'

const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToWorker = path.join(__dirname, '/worker.js');

const START_FROM_NUMBER = 10;

const printResult = (result) => {
    const formattedResult = result.map((item) => ({
        status: item.status === "rejected" ? "error" : "resolved",
        data: item.value || null,
    }))
    console.log(formattedResult);
}

const performCalculations = async () => {
    const systemCpuCores = os.cpus();

    const workersPromises = systemCpuCores.map((item, index) => {
        const workerData = START_FROM_NUMBER + index;
        const worker = new Worker(pathToWorker, { workerData });

        return new Promise((resolve, reject) => {
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
            })
        })
    })

    const result = await Promise.allSettled(workersPromises)
    printResult(result)

};

await performCalculations();