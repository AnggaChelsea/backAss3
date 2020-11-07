const faker = require('faker');
const Productfake = require('../models/Productfake');
const Category = require('../models/Categoryfake');

class Productfakeclass{
static postget(req, res, next) {
    const categories = ["Baby", "Movies", "Shoes", "Books", "Electronics","Computers", "Kids"];
    for (let i = 0; i < 20; i++) {
        let product = new Productfake({
            name : faker.commerce.productName(),
            price : faker.commerce.price(),
            category: categories[Math.floor(Math.random() * categories.length)],
            description : faker.lorem.paragraph(),
            image: "https://images-na.ssl-images-amazon.com/images/I/4196ru-rkjL.jpg"
        });
        product.save()
        .then((product)=>{
          res.status(201).json({message:'productfake created'})
        })
    }
    for (let i = 0; i < categories.length; i++) {
        let cat = new Category({
            title: categories[i]
        });
        cat.save();
    }
    res.status(201).json({
      success:true, data: cat
    })
    .catch(next)
}
}
module.exports = Productfakeclass;
