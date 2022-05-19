const express = require("express");
const hari = require("../controllers/hari");
const router = express.Router();

router.get("/hari", hari.tampil);
router.get("/hari/:id", hari.cari);
router.get("/hari/shift/:id", hari.nama_hari);
router.post("/hari", hari.simpan);
router.put("/hari/:id", hari.edit);
router.patch("/hari/:id", hari.editStatus);

module.exports = router;
