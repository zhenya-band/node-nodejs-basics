const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = args
        .map((arg, index) => {
            if (arg.startsWith('--')) {
                const key = arg.slice(2);
                return `${key} is ${args[index + 1]}`
            }
        })
        .filter(Boolean)
        .join(', ');

    console.log(result);
};

parseArgs();