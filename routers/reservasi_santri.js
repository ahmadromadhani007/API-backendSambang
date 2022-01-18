const express = require("express");
const reservasi_santri = require("../controllers/reservasi_santri");
const router = express.Router();

router.get("/reservasi_santri", reservasi_santri.tampil);
router.get("/reservasi_santri/:id_reservasi", reservasi_santri.cari);
router.post("/reservasi_santri", reservasi_santri.simpan);

module.exports = router;
