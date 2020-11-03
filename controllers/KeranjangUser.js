const keranjangUser = require('../models/KeranjangUser');

class KeranjangUser{
    static post(req, res, next) {
        const { pilihbarang } = req.body;
        const keranjang = new keranjangUser({
            _productId:req.params._id,
            _userId: req._userId,
            pilihbarang: pilihbarang
        })
        keranjang.save()
        .then((keranjang)=>{
            res.status(201).json({message:'keranjang successfully added', data:keranjang})
        })
        .catch(next);
    }
}

module.exports = KeranjangUser;
