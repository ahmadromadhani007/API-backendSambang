const express = require("express");
const wilayah = require("../controllers/wilayah");
const router = express.Router();

router.get("/wilayah", wilayah.tampil);

module.exports = router;
