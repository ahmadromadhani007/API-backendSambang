const express = require("express");
const router = express.Router();

const histori_shif_hari = require("../controllers/histori_shif_hari");

router.get("/histori/shif/hari", histori_shif_hari.tampil);
router.get("/histori/shif/hari/:id_shif_hari", histori_shif_hari.cari);
router.post("/histori/shif/hari", histori_shif_hari.simpan);
router.put("/histori/shif/hari/:id_shif_hari", histori_shif_hari.edit);

module.exports = router;