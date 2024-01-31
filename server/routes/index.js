const express = require("express");
const router = express.Router();

const graphDataRoutes = require("./graphDataRoutes");

router.use("/", graphDataRoutes);

module.exports = router;
