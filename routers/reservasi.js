const express = require("express");
const reservasi = require("../controllers/reservasi");
const router = express.Router();

router.get("/reservasi", reservasi.tampil);
router.get("/reservasiId", reservasi.id);
router.get("/reservasi/:id", reservasi.cari);
router.get("/reservasi/mahrom/:no_mahrom", reservasi.mahrom);
router.get("/reservasi/tanggal/:tgl_kunjungan", reservasi.tgl_kunjungan);
router.post("/reservasi", reservasi.simpan);
router.put("/reservasi/:id", reservasi.edit);

module.exports = router;
