const express = require("express");
const router = express.Router();

const detail_sambang = require("../controllers/detail_sambang");

router.get("/detail/sambang", detail_sambang.tampil);
router.get("/detail/sambang/:id_detail_sambang", detail_sambang.cari);
router.post("/detail/sambang", detail_sambang.simpan);
router.put("/detail/sambang/:id_detail_sambang", detail_sambang.edit);

module.exports = router;