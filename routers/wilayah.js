const express = require("express");
const router = express.Router();

const wilayah = require("../controllers/wilayah");

router.get("/wilayah", wilayah.tampil);
router.get("/wilayah/:id_wilayah", wilayah.cari);
router.post("/wilayah", wilayah.simpan);
router.put("/wilayah/:id_wilayah", wilayah.edit);

module.exports = router;