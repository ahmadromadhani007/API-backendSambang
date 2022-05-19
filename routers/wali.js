const express = require("express");
const wali = require("../controllers/wali");
const router = express.Router();

router.get("/wali", wali.tampil);
router.get("/wali/:no_mahrom", wali.cari);

module.exports = router;
