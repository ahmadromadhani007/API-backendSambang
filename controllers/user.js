const { application } = require("express");
const { user } = require("../model");
const { sequelize } = require("sequelize");

module.exports = {
  async tampil(req, res, next) {
    try {
      await user
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
      await user
        .findAll({
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
};
