const Alamatjs = require('../models/Alamat');

class Alamat {
  static post(req, res, next) {
    const {
      desa,
      kecamatan,
      kabupaten,
      provinsi,
      negara,
      nohp,
      kodepos
    } = req.body;
    const alamat = new Alamatjs({
      _userId: req._userId,
      desa,
      kecamatan,
      kabupaten,
      provinsi,
      negara,
      nohp,
      kodepos
    });
    alamat
      .save()
      .then(function (alamat) {
        res.status(201).json({
          message: 'succes add',
          data: alamat
        });
      })
      .catch(next)
  }

  //edit alamat
  static editalamat(req, res, next) {
    const {
      desa,
      kecamatan,
      kabupaten,
      provinsi,
      negara,
      nohp,
      kodepos
    } = req.body;
    Alamatjs.findOne({
      _id: req.params.id
    })
    .then((alamat)=>{
      alamat.desa = desa;
      alamat.kecamatan = kecamatan;
      alamat.kabupaten = kabupaten;
      alamat.provinsi = provinsi;
      alamat.negara = negara;
      alamat.nohp = nohp;
      alamat.kodepos = kodepos;
      return alamat.save();
    })
    .then((alamat)=> {
      res.status(200).json({message:'succes edit alamat', data:alamat})
    })
    .catch(next)
    
  }

  //delete
  static delete(req, res, next) {
    Alamatjs.findOne({
        _id: req.params.id
      })
      .then((alamat) => {
        res.status(200).json({
          message: 'succes delete',
          data: {
            delete: alamat
          }
        });
      })
      .catch(next);
  }

}

module.exports = Alamat;