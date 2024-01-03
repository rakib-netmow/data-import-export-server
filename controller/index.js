const csvtojsonV2 = require("csvtojson/v2");
const importData = async (req, res) => {
  const file = req.file?.path;
  const csvFilePath = file;
  const jsonArray = await csvtojsonV2().fromFile(csvFilePath);
  // console.log("Imported!", jsonArray);
  const finalData = [];
  jsonArray.map((e) =>
    Object.keys(e).map((k) => !finalData.includes(k) && finalData.push(k))
  );

  res.send(finalData);
};

module.exports = {
  importData,
};
