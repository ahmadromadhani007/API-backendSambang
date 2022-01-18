const express = require("express");
const informasi = require("../controllers/informasi");
const router = express.Router();

router.get("/informasi", informasi.tampil);
router.get("/informasi/:id", informasi.cari);
router.get("/informasi/tanggal/:tanggal_mulai", informasi.tanggal_mulai);
router.post("/informasi", informasi.simpan);
router.put("/informasi/:id", informasi.edit);

module.exports = router;
