const {setting_pertemuan} = require("../model");

module.exports = {
    async tampil (req, res, next){
      try {
        await setting_pertemuan.findAll().then(result => {
            if (result.length > 0) {
                return res.status(200).json({
                    success: 1,
                    data : result
                });
            } else {
                return res.status(400).json({
                    success: 0,
                    message: "tidak ditemukan...",
                });
            }
        }).catch(error => {
            return res.status(400).json({
                success: 0,
                message: error.message
            });
        });       
      } catch (error) {
        return res.status(400).json({
            success: 0,
            message: error.message
        });          
      }
    },
    async cari (req, res, next){
        try {
            await setting_pertemuan.findOne({where : {
                id_pertemuan : req.params.id_pertemuan,
            }}).then(result => {
                  if (result != 0) {
                      return res.status(200).json({
                          success: 1,
                          data : result
                      });
                  } else {
                      return res.status(400).json({
                          success: 0,
                          message: "tidak ditemukan...",
                      });
                  }
              }).catch(error => {
                  return res.status(400).json({
                      success: 0,
                      message: error.message
                  });
              }); 
        } catch (error) {
          return res.status(400).json({
              success: 0,
              message: error.message
          });          
        }
    },
    async simpan (req, res, next){
        try {
         const {jml_pertemuan,jml_tamu,alokasi_waktu} = req.body;
         await setting_pertemuan.create({
            jml_pertemuan,
            jml_tamu,
            alokasi_waktu
        }).then(result => {
            return res.status(201).json({
                success: 1,
                message: 'Berhasil Tersimpan',
                data: result,
            });
        }).catch(error => {
            return res.status(400).json({
                success: 0,
                message: error.message
            });
        });
        } catch (error) {
            return res.status(400).json({
                success : 0,
                message : error.message
            })            
        }
    },
    async edit (req,res,next){
        try {
            const {jml_pertemuan,jml_tamu,alokasi_waktu} = req.body;
            await setting_pertemuan.update({
                jml_pertemuan,
                jml_tamu,
                alokasi_waktu
            },{where : {id_pertemuan : req.params.id_pertemuan}}).then(result => {
                if(result == 1){
                    return res.status(201).json({
                        success: 1,
                        message: 'Berhasil Pembaruan',
                    });
                }else{
                    return res.status(400).json({
                        success: 0,
                        message: 'Gagal Pembaruan',
                    });
                }
            }).catch(error => {
                return res.status(400).json({
                    success: 0,
                    message: error.message
                });
            });
         } catch (error) {
             return res.status(400).json({
                 success : 0,
                 message : error.message
             })            
         } 
    },
}