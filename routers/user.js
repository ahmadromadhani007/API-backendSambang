const express = require("express");
const user = require("../controllers/user");
const router = express.Router();

router.get("/user", user.tampil);
router.get("/user/:id", user.cari);

module.exports = router;
