const express = require("express");
const shift = require("../controllers/shift");
const router = express.Router();

router.get("/shift", shift.tampil);
router.post("/shift", shift.simpan);
router.get("/shift/:id", shift.cari);
router.put("/shift/:id", shift.edit);
router.patch("/shift/:id", shift.editStatus);

module.exports = router;
