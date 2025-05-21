const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });

client.connect().catch(console.error);

const setCache = async (key, value, expiration = 3600) => {
    await client.set(key, JSON.stringify(value), { EX: expiration });
};

const getCache = async (key) => {
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
};

module.exports = { setCache, getCache };
