const { application } = require("express");
const { informasi } = require("../model");

module.exports = {
  async tampil(req, res, next) {
    try {
      await informasi
        .findAll()
        .then((result) => {
          if (result.length > 0) {
            return res.status(200).json({
              success: 1,
              data: result,
            });
          } else {
            return res.status(400).json({
              success: 0,
              message: "tidak ditemukan...",
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({
            success: 0,
            message: error.message,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: 0,
        message: error.message,
      });
    }
  },
  async cari(req, res, next) {
    try {
      await informasi
        .findOne({
          where: {
            id: req.params.id,
          },
        })
        .then((result) => {
          if (result != 0) {
            return res.status(200).json({
              success: 1,
              data: result,
            });
          } else {
            return res.status(400).json({
              success: 0,
              message: "tidak ditemukan...",
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({
            success: 0,
            message: error.message,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: 0,
        message: error.message,
      });
    }
  },
  async tanggal_mulai(req, res, next) {
    try {
      await informasi
        .findAll({
          where: {
            tanggal_mulai: req.params.tanggal_mulai,
          },
        })
        .then((result) => {
          if (result != 0) {
            return res.status(200).json({
              success: 1,
              data: result,
            });
          } else {
            return res.status(400).json({
              success: 0,
              message: "tidak ditemukan...",
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({
            success: 0,
            message: error.message,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: 0,
        message: error.message,
      });
    }
  },
  async simpan(req, res, next) {
    try {
      const {
        nama_informasi,
        detail_informasi,
        tanggal_mulai,
        tanggal_akhir,
        status,
      } = req.body;
      await informasi
        .create({
          nama_informasi,
          detail_informasi,
          tanggal_mulai,
          tanggal_akhir,
          status,
        })
        .then((result) => {
          return res.status(201).json({
            success: 1,
            message: "Berhasil Tersimpan",
            data: result,
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: 0,
            message: error.message,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: 0,
        message: error.message,
      });
    }
  },
  async edit(req, res, next) {
    try {
      const {
        nama_informasi,
        detail_informasi,
        tanggal_mulai,
        tanggal_akhir,
        status,
      } = req.body;
      await informasi
        .update(
          {
            nama_informasi,
            detail_informasi,
            tanggal_mulai,
            tanggal_akhir,
            status,
          },
          { where: { id: req.params.id } }
        )
        .then((result) => {
          if (result == 1) {
            return res.status(201).json({
              success: 1,
              message: "Berhasil Pembaruan",
            });
          } else {
            return res.status(400).json({
              success: 0,
              message: "Gagal Pembaruan",
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({
            success: 0,
            message: error.message,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: 0,
        message: error.message,
      });
    }
  },
};
