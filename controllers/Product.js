const Productjs = require('../models/Product');
const Kategory = require('../models/Kategory')

class Product {
  static post(req, res, next) {
    const {
      namabarang,
      tumbnail,
      gambar,
      deskripsi,
      harga,
      jumlah,
      deskripsisingkat
    } = req.body;
    const product = new Productjs({
      namabarang,
      tumbnail,
      gambar,
      deskripsi,
      harga,
      jumlah,
      deskripsisingkat
    })
    product.save()
    .then((product) =>{
      res.status(201).json({message:'succes product added successfully', data: product});
    })
    .catch(next)
  }
  static get(req, res, next){
    Productjs.find(req._productId)
    .then((product)=>{
      res.status(200).json({
        message:'succes', data:product,
      })
    })
    .catch(next)
  }

  static get(req, res, next){
    Productjs.find(req._productId)
    .then((product)=>{
      res.status(200).json({
        message:'succes', data:product,
      })
    })
    .catch(next)
  }


  static edit(req, res, next){

  }

}

module.exports = Product;
