// Caching with Redis
// Description: Implement a simple cache mechanism with Redis to store and retrieve data in a Node.js application.

// Steps:
// 1. Install Redis client for Node.js by running npm install redis .
// 2. Create and connect a Redis client using redis.createClient() .
// 3. Use client.set() to store a key-value pair.
// 4. Retrieve the stored value with client.get() and log it.
// 5. Close the connection using client.quit() .


const redis = require('redis');

async function runRedisCacheExample() {
    // Step 2: Create and connect Redis client
    const client = redis.createClient(); // defaults to localhost:6379

    client.on('error', (err) => console.error('Redis Client Error', err));

    await client.connect();
    console.log('Connected to Redis');

    // Step 3: Store a key-value pair
    await client.set('user:1', JSON.stringify({ name: 'Alice', age: 25 }));
    console.log('Data stored in Redis');

    // Step 4: Retrieve the stored value
    const data = await client.get('user:1');
    console.log('Retrieved from Redis:', JSON.parse(data));

    // Step 5: Close the connection
    await client.quit();
    console.log('Connection closed');
}

runRedisCacheExample();
