const csvtojsonV2 = require("csvtojson/v2");
const { Worker } = require("node:worker_threads");
const { guardianAllFields } = require("../config/exportImportRequiredFilds");
const THREAD_COUNT = process.env.THREAD_COUNT || 2;

const importData = async (req, res) => {
  const file = req.file?.path;
  const csvFilePath = file;
  const jsonArray = await csvtojsonV2().fromFile(csvFilePath);
  const worker = new Worker("./config/worker.js", {
    workerData: {
      data: jsonArray,
    },
  });
  worker.on("message", (data) => {
    res.status(200).send(data);
  });

  worker.on("error", (err) => {
    console.log(err);
    res.status(400).send(err);
  });
};

// const createWorker = (d) => {
//   return new Promise((resolve, reject) => {
//     const worker = new Worker("../config/worker.js", {
//       workerData: {
//         thread_count: THREAD_COUNT,
//         data: d,
//       },
//     });

//     worker.on("message", (data) => {
//       resolve(data);
//     });

//     worker.on("error", (err) => {
//       reject(err);
//     });
//   });
// };

// const count = async (req, res) => {
//   const worker = new Worker("./config/worker2.js");
//   worker.on("message", (data) => {
//     res.status(200).json(data);
//   });
//   worker.on("error", (err) => {
//     res.status(400).json(err);
//   });
//   let result = 0;
//   for (var i = 0; i <= 100000000000; i++) {
//     result++;
//   }
//   res.status(200).json(result);
// };

const getAllGuardianFields = async (req, res) => {
  const result = guardianAllFields;
  res.status(200).json(result);
};

module.exports = {
  importData,
  // count,
  getAllGuardianFields,
};
