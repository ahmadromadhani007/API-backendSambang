const {sambang_santri} = require("../model");

module.exports = {
    async tampil (req, res, next){
      try {
        await sambang_santri.findAll().then(result => {
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
            await sambang_santri.findOne({where : {
                id_sambang_santri  : req.params.id_sambang_santri ,
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
         const {no_reservasi,id_mahrom,id_set_hari,tgl_daftar_sambang,tgl_sambang,status_hadir,jam_mulai,jam_akhir} = req.body;
         await sambang_santri.create({
            no_reservasi,
            id_mahrom,
            id_set_hari,
            tgl_daftar_sambang,
            tgl_sambang,
            status_hadir,
            jam_mulai,
            jam_akhir
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
            const {no_reservasi,id_mahrom,id_set_hari,tgl_daftar_sambang,tgl_sambang,status_hadir,jam_mulai,jam_akhir} = req.body;
            await sambang_santri.update({
                no_reservasi,
                id_mahrom,
                id_set_hari,
                tgl_daftar_sambang,
                tgl_sambang,
                status_hadir,
                jam_mulai,
                jam_akhir
            },{where : {id_sambang_santri  : req.params.id_sambang_santri }}).then(result => {
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