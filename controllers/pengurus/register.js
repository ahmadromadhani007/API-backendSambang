const bcrypt = require("bcryptjs");
const { Pengurus } = require("../../model");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { username, password, nama, foto } = req.body;
  const schema = {
    username: "string|required",
    password: "string|required",
    nama: "string|required",
    foto: "string|required",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(422).json({
      status: false,
      message: validate,
    });
  }

  await Pengurus.create({
    username,
    password: bcrypt.hashSync(password, 10),
    nama,
    foto,
  })
    .then((data) => {
      return res.status(201).json({
        status: true,
        message: "Pengurus berhasil ditambahkan",
        data,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    });
};
