const express = require("express");
const router = express.Router();

const santri = require("../controllers/santri");

router.get("/santri", santri.tampil);
router.get("/santri/:id_santri", santri.cari);
router.post("/santri", santri.simpan);
router.put("/santri/:id_santri", santri.edit);

module.exports = router;