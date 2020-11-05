const Kategori = require('../models/Kategory');

class KategoryController {

  static post(req,res,next){
    const {
      kategori
    } = req.body;
    const categoryNew = new Kategori({
      _productId: req.params._id,
      kategori,
    })
    categoryNew.save()
      .then(function (category) {
        res.status(201).json({
          success: true,
          data: categoryNew
        });
      })
      .catch(next);

  }


  static patch(req, res, next) {
    console.log(req._id);
    const {
      kategori
    } = req.body;
    const category = new Kategori({
      _productId: req.params._id,
      kategori,
    })
    category.save()
      .then(function (category) {
        res.status(201).json({
          success: true,
          data: category
        });
      })
      .catch(next);
  }

}

module.exports = KategoryController;
