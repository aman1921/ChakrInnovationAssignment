const express = require("express");
const router = express.Router();

const {
    getGraphData
} = require("../controllers/graphData");

router.get("/getGraphData", getGraphData);

module.exports = router;
