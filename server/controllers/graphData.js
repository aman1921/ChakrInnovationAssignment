const { getDownSapmledGraphData } = require("../functions/getDownSampledData");

exports.getGraphData = async (req, res) => {
    const downsampledData = await getDownSapmledGraphData();
    res.json(downsampledData);
  };