const express = require("express");
const pertemuan = require("../controllers/pertemuan");
const router = express.Router();

router.get("/pertemuan", pertemuan.tampil);
router.put("/pertemuan/:id", pertemuan.edit);

module.exports = router;
