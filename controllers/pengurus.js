const {pengurus} = require("../model");

module.exports = {
    async tampil (req, res, next){
      try {
        await pengurus.findAll().then(result => {
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
            await pengurus.findOne({where : {
                id_pengurus : req.params.id_pengurus,
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
         const {nama_pengurus,jenkel,id_wilayah,status} = req.body;
         await pengurus.create({
            nama_pengurus,
            jenkel,
            id_wilayah,
            status
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
            const {nama_pengurus,jenkel,id_wilayah,status} = req.body;
            await pengurus.update({
                nama_pengurus,
                jenkel,
                id_wilayah,
                status
            },{where : {id_pengurus : req.params.id_pengurus}}).then(result => {
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