const express = require("express");
const router = express.Router();

const setting_pertemuan = require("../controllers/setting_pertemuan");

router.get("/setting/pertemuan", setting_pertemuan.tampil);
router.get("/setting/pertemuan/:id_pertemuan", setting_pertemuan.cari);
router.post("/setting/pertemuan", setting_pertemuan.simpan);
router.put("/setting/pertemuan/:id_pertemuan", setting_pertemuan.edit);

module.exports = router;