const express = require("express");
const router = express.Router();

const manufacture = require("./manufacture");

router.use("/manufactures", manufacture);

module.exports = router;
