const importData = async (req, res) => {
  const file = req.file?.path;
  console.log("Imported!");
};

module.exports = {
  importData,
};
