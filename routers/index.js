const express = require("express");
const router = express.Router();
// const authorize = require('../middleware/authorize');

router.use(require("./pengurus"));
router.use(require("./shift"));
router.use(require("./wilayah"));
router.use(require("./hari"));
router.use(require("./reservasi"));
router.use(require("./wali"));
router.use(require("./santri"));
router.use(require("./reservasi_wali"));
router.use(require("./reservasi_santri"));
router.use(require("./pertemuan"));
router.use(require("./informasi"));

module.exports = router;
