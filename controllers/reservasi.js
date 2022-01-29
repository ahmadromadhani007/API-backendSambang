const {
  reservasi,
  wilayah,
  reservasi_wali,
  reservasi_santri,
  wali,
  santri,
} = require("../model");

module.exports = {
  async tampil(req, res, next) {
    try {
      await reservasi
        .findAll({
          include: [
            {
              model: reservasi_wali,
              where: reservasi_wali.id_reservasi == reservasi.id,
              attributes: ["id"],
              required: true,
              include: [
                {
                  model: wali,
                  attributes: ["id", "nama_wali", "nik", "status"],
                },
              ],
            },
            {
              model: reservasi_santri,
              where: reservasi_santri.id_reservasi == reservasi.id,
              attributes: ["id"],
              required: true,
              include: [
                {
                  model: santri,
                  attributes: ["id", "nama", "no_mahrom", "status"],
                  include: [
                    {
                      model: wilayah,
                      attributes: ["nama_wilayah"],
                    },
                  ],
                },
              ],
            },
          ],
        })
        .then((result) => {
          if (result.length > 0) {
            return res.status(200).json({
              success: 1,
              data: result,
            });
          } else {
            return res.status(400).json({
              success: 0,
              message: "Data tidak ditemukan!",
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
      await reservasi
        .findOne({
          include: [
            reservasi_santri,
            {
              model: reservasi_santri,
              where: reservasi_santri.id_reservasi == reservasi.id,
              required: true,
              attributes: ["id_santri"],
              include: [
                {
                  model: santri,
                  where: reservasi_santri.id_santri == santri.id,
                  attributes: ["no_mahrom", "nama"],
                  include: [
                    {
                      model: wilayah,
                      where: santri.id_wilayah == wilayah.id,
                    },
                  ],
                },
              ],
            },
            reservasi_wali,
            {
              model: reservasi_wali,
              where: reservasi_wali.id_reservasi == reservasi.id,
              required: true,
              attributes: ["id_wali"],
              include: [
                {
                  model: wali,
                  where: reservasi_wali.id_wali == wali.id,
                  attributes: ["no_mahrom", "nama_wali", "nik", "status"],
                },
              ],
            },
          ],
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
              message: "Data tidak ditemukan!",
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
  async tgl_kunjungan(req, res, next) {
    try {
      await reservasi
        .findAll({
          include: [
            reservasi_santri,
            {
              model: reservasi_santri,
              where: reservasi_santri.id_reservasi == reservasi.id,
              required: true,
              attributes: ["id_santri"],
              include: [
                {
                  model: santri,
                  where: reservasi_santri.id_santri == santri.id,
                  attributes: ["no_mahrom", "nama"],
                  include: [
                    {
                      model: wilayah,
                      where: santri.id_wilayah == wilayah.id,
                    },
                  ],
                },
              ],
            },
            reservasi_wali,
            {
              model: reservasi_wali,
              where: reservasi_wali.id_reservasi == reservasi.id,
              required: true,
              attributes: ["id_wali"],
              include: [
                {
                  model: wali,
                  where: reservasi_wali.id_wali == wali.id,
                  attributes: ["no_mahrom", "nama_wali", "nik", "status"],
                },
              ],
            },
          ],
          where: {
            tgl_kunjungan: req.params.tgl_kunjungan,
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
              message: "Data tidak ditemukan!",
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
  async id(req, res, next) {
    try {
      await reservasi
        .findOne({
          order: [["id", "DESC"]],
          attributes: ["id"],
        })
        .then((result) => {
          if (result != 0) {
            return res.status(200).json({
              result,
            });
          } else {
            return res.status(400).json({
              success: 0,
              message: "Data tidak ditemukan!",
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
        no_mahrom,
        id_hari,
        id_shift,
        tgl_reservasi,
        tgl_kunjungan,
        jam_mula,
        jam_final,
        hadir,
      } = req.body;
      await reservasi
        .create({
          no_mahrom,
          id_hari,
          id_shift,
          tgl_reservasi,
          tgl_kunjungan,
          jam_mula,
          jam_final,
          hadir,
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
      const { hadir, jam_mula, jam_final } = req.body;
      await reservasi
        .update(
          {
            hadir,
            jam_mula,
            jam_final,
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
