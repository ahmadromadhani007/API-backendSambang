const express = require("express");
const router = express.Router();
const authorize = require('../middleware/authorize');

router.use(require("./pengurus"));
router.use(authorize, require("./shift"));
router.use(authorize, require("./wilayah"));
router.use(authorize, require("./hari"));
router.use(authorize, require("./reservasi"));
router.use(authorize, require("./wali"));
router.use(authorize, require("./santri"));
router.use(authorize, require("./reservasi_wali"));
router.use(authorize, require("./reservasi_santri"));
router.use(authorize, require("./pertemuan"));
router.use(authorize, require("./informasi"));

module.exports = router;
