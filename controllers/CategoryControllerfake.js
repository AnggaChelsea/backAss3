const categoryfake = require('../models/Categoryfake')
const Productfake = require('../models/Productfake');


class CategoryControllerfake{
static get(req, res, next) {
    Category.find(function (err, categories) {
        if (err) return console.log(err);
        res.status(200).json(categories);
    });
  }


static getId(req, res, next) {
    Category.findOne({title: req.params.category}, function (err, category) {
        if (err) return console.log(err);
        Product.find({category: category.title}, function(err, products) {
            if(err) return console.log(err);
            res.status(200).json(products);
        });
    }

}
}
