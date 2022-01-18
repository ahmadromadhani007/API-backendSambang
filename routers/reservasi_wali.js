const express = require("express");
const reservasi_wali = require("../controllers/reservasi_wali");
const router = express.Router();

router.get("/reservasi_wali", reservasi_wali.tampil);
router.get("/reservasi_wali/:id_reservasi", reservasi_wali.cari);
router.post("/reservasi_wali", reservasi_wali.simpan);

module.exports = router;
