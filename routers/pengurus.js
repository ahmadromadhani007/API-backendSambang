const express = require("express");
const router = express.Router();

const pengurus = require("../controllers/pengurus");

router.get("/pengurus", pengurus.tampil);
router.get("/pengurus/:id_pengurus", pengurus.cari);
router.post("/pengurus", pengurus.simpan);
router.put("/pengurus/:id_pengurus", pengurus.edit);

module.exports = router;