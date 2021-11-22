const express = require("express");
const router = express.Router();

const shif = require("../controllers/shif");

router.get("/setting/shif", shif.tampil);
router.get("/setting/shif/:id_shif", shif.cari);
router.post("/setting/shif", shif.simpan);
router.put("/setting/shif/:id_shif", shif.edit);

module.exports = router;