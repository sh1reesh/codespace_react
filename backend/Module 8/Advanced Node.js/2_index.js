// Basic Clustering
// Description: Implement a basic clustering setup to create multiple workers in a Node.js script.

// Steps:
// 1. Check if the current process is the master using cluster.isMaster .
// 2. Fork workers based on the number of CPU cores available using os.cpus().length .
// 3. In each worker, create an HTTP server that listens on port 8000.
// 4. Log messages to show when a worker is started or terminated.


const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    // Step 1: Master process logic
    console.log(`Master process ${process.pid} is running`);

    // Step 2: Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Listen for worker exit
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });

    // Optionally listen for new workers
    cluster.on('online', (worker) => {
        console.log(`Worker ${worker.process.pid} started`);
    });

} else {
    // Step 3: Worker process logic
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello from worker ${process.pid}\n`);
    }).listen(8000);

    console.log(`Worker ${process.pid} is listening on port 8000`);
}
