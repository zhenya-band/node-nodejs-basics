const parseEnv = () => {
    const envs = process.env;
    const result = Object.entries(envs)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(result);
};

parseEnv();