import { Transform } from 'stream';

const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
        reverseStream.push(chunk.reverse() + '\n');
        callback();
    },
});

const transform = async () => {
    process.stdin.pipe(reverseStream).pipe(process.stdout);

};

await transform();