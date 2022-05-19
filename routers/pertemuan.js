const express = require("express");
const pertemuan = require("../controllers/pertemuan");
const router = express.Router();

router.get("/pertemuan", pertemuan.tampil);
router.get("/pertemuan/:id", pertemuan.cari);
router.put("/pertemuan/:id", pertemuan.edit);

module.exports = router;
