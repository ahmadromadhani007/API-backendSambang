const express = require("express");
const router = express.Router();

const sambang_santri = require("../controllers/sambang_santri");

router.get("/sambang/santri", sambang_santri.tampil);
router.get("/sambang/santri/:id_sambang_santri", sambang_santri.cari);
router.post("/sambang/santri", sambang_santri.simpan);
router.put("/sambang/santri/:id_sambang_santri", sambang_santri.edit);

module.exports = router;