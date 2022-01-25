const express = require("express");
const router = express.Router();

const pengurus = require("../controllers/pengurus");

router.post("/register", pengurus.register);
router.post("/login", pengurus.login);

module.exports = router;
