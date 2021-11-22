const express = require("express");
const router = express.Router();

const tamu_sambang = require("../controllers/tamu_sambang");

router.get("/tamu/sambang", tamu_sambang.tampil);
router.get("/tamu/sambang/:id_tamu", tamu_sambang.cari);
router.post("/tamu/sambang", tamu_sambang.simpan);
router.put("/tamu/sambang/:id_tamu", tamu_sambang.edit);

module.exports = router;