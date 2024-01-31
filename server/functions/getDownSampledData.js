const path = require("path");

const readCsvAndDownsample = require('./downsample');

const csvFilePath = path.normalize(path.join(__dirname, "../data/dataset.csv"));
const threshold = 12;

exports.getDownSapmledGraphData = async () => {
  try {
    const downsampledData = await readCsvAndDownsample(csvFilePath, threshold);
    return downsampledData;
  } catch (error) {
    console.log(error);
    return null;
  }
}
