const express = require("express");
const router = express.Router();

const setting_hari = require("../controllers/setting_hari");

router.get("/setting/hari", setting_hari.tampil);
router.get("/setting/hari/:id_set_hari", setting_hari.cari);
router.post("/setting/hari", setting_hari.simpan);
router.put("/setting/hari/:id_set_hari", setting_hari.edit);

module.exports = router;