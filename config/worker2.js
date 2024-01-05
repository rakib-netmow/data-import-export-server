const { parentPort } = require("node:worker_threads");

let result = 0;
for (var i = 0; i <= 100000000000; i++) {
  result++;
}
parentPort.postMessage(result);
