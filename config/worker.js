const { parentPort, workerData } = require("node:worker_threads");

const data = workerData.data;
const result = [];
for (var i = 0; i <= data.length; i++) {
  if (data[i] !== null && data[i] !== undefined) {
    const objKeys = Object.keys(data[i]);
    for (var j = 0; j <= objKeys.length; j++) {
      if (!result.includes(objKeys[j])) {
        result.push(objKeys[j]);
      }
    }
  }
}
parentPort.postMessage(result);
