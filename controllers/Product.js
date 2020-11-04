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
    const { page =1, limit=10 } = req.query;
    const product = Productjs.find()
    .limit(limit * 1)
    .skip((page -1)* limit)
    .then((product)=>{
      res.status(200).json({
        message:'succes', total: product.length, product
      })
    })
    .catch(next)
  }

  static getId(req, res, next) {
    Productjs.findOne({
        _id: req.params.id
      })
      .then((products) => {
        res.status(200).json({
          success: true,
          data: products
        })
      })
      .catch(next);
  }

  // static getId(req, res, next){
  //   Productjs.findById(req._productId)
  //   .then((product)=>{
  //     res.status(200).json({
  //       message:'succes', data:product,
  //     })
  //   })
  //   .catch(next)
  // }


  static edit(req, res, next){

  }

}

module.exports = Product;
