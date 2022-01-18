const express = require("express");
const santri = require("../controllers/santri");
const router = express.Router();

router.get("/santri", santri.tampil);
router.get("/santri/:no_mahrom", santri.cari);
router.get("/santri/id/:id", santri.cariSantri);
router.put("/santri/id/:id", santri.edit);

module.exports = router;
