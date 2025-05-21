// Implementing Load Balancing with Node.js Cluster
// Description: Extend your cluster application from Question 8 to demonstrate basic load balancing.

// Steps:
// 1. Use Node.js cluster module from the previous setup.
// 2. Add a listening event to track the status of workers.
// 3. Make each worker listen on a different port for demonstration purposes.
// 4. Log messages to indicate successful setup and demonstrate the balancing of requests
// among worker processes. This kind of manual port setting is mainly for demonstration and
// would be behind a reverse proxy in a real-world scenario.


const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;
const BASE_PORT = 8000;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers and assign ports
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork({ PORT: BASE_PORT + i });
        console.log(`Forked worker ${worker.process.pid} for port ${BASE_PORT + i}`);
    }

    // Step 2: Track worker status
    cluster.on('online', (worker) => {
        console.log(`Worker ${worker.process.pid} is online`);
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} exited`);
    });

} else {
    const port = process.env.PORT;

    // Step 3: Worker HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Response from worker ${process.pid} on port ${port}\n`);
    }).listen(port, () => {
        // Step 4: Log success
        console.log(`Worker ${process.pid} is listening on port ${port}`);
    });
}
