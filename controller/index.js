const csvtojsonV2 = require("csvtojson/v2");
const { Worker } = require("node:worker_threads");

const result = [
  1, 2, 3, 6, 8, 10, 12, 15, 16, 18, 22, 25, 29, 31, 32, 33, 34, 35, 36, 37, 38,
  39, 41, 50, 51, 52, 53, 54, 55, 56, 1, 23, 1, 50, 26, 25, 16, 17, 18, 19,
];
const THREAD_COUNT = process.env.THREAD_COUNT || 2;

const importData = async (req, res) => {
  const file = req.file?.path;
  const csvFilePath = file;
  const jsonArray = await csvtojsonV2().fromFile(csvFilePath);
  // console.log("Imported!", jsonArray);
  // const finalData = [];
  // jsonArray.map((e) =>
  //   Object.keys(e).map((k) => !finalData.includes(k) && finalData.push(k))
  // );

  // res.send(finalData);
  console.log("here");
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

const count = async (req, res) => {
  // const worker = new Worker("../config/worker.js", {
  //   workerData: {
  //     data:
  //   }
  // });
};

module.exports = {
  importData,
  count,
};
