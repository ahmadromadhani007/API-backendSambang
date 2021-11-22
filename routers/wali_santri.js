const express = require("express");
const router = express.Router();

const wali_santri = require("../controllers/wali_santri");

router.get("/wali/santri", wali_santri.tampil);
router.get("/wali/santri/:id_wali_santri", wali_santri.cari);
router.post("/wali/santri", wali_santri.simpan);
router.put("/wali/santri/:id_wali_santri", wali_santri.edit);

module.exports = router;