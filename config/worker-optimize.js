const { parentPort, workerData } = require("worker_threads");

const result = workerData.data;

for (let i = 0; i < 10000000000 / workerData.thread_count; i++) {
  result.push(i);
}

parentPort.postMessage(result);
