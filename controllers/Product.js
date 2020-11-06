const Productjs = require('../models/Product');
const Kategory = require('../models/Kategory')

class Product {
  static post(req, res, next) {
    const {
      name,
      tumbnail,
      gambar,
      deskripsi,
      price,
      jumlah,
      deskripsisingkat
    } = req.body;
    const product = new Productjs({
      name,
      tumbnail,
      gambar,
      deskripsi,
      price,
      jumlah,
      deskripsisingkat
    })
    product.save()
    .then((product) =>{
      res.status(201).json({message:'succes product added successfully', data: product});
    })
    .catch(next)
  }

  static getPage(req, res, next){
    const { page =1, limit=10 } = req.query;
    const product = Productjs.find()
    .limit(limit * 1)
    .skip((page -1)* limit)
    .then((product)=>{
      res.status(200).json({
        message:'succes', total: product.length, page:page, product
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



  static getall(req, res, next){
    Productjs.find()
    .then((product)=>{
      res.status(200).json({message:'ok', data:product})
    })
    .catch(next)
  }

}

module.exports = Product;
