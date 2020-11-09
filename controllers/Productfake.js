const faker = require('faker');
const Productfake = require('../models/Productfake');
const Category = require('../models/Categoryfake');

class Productfakeclass{
static postget(req, res, next) {
  const categories = ["pizza", "sosis", "Meatball", "noodles", "chocholate","Egg food", "Nasigorenf"];
  for (let i = 0; i < 50; i++) {
      let product = new Productfake({
          name : faker.commerce.productName(),
          price : faker.commerce.price(),
          category: categories[Math.floor(Math.random() * categories.length)],
          description : faker.lorem.paragraph(),
          image: faker.image.food()
      });

      product.save();
  }
  for (let i = 0; i < categories.length; i++) {
      let cat = new Category({
          title: categories[i]
      });
      cat.save();
  }
  res.status(201).json({mesage:'ok', data:cat})
}

static getpage(req, res, next) {
 let perPage = 10;
 let page = parseInt(req.query.page) || 0;
 let pages = 0;
 let nextUrl = '';
 let prevUrl = '';
 Productfake.count().exec(function (err, count) {
   Productfake.find()
     .limit(perPage)
     .skip(perPage * page)
     .exec(function (err, products) {
       pages = Math.floor(count / perPage);
       if (page === 0) {
         res.json({
           products,
           currentPage: page,
           pages,
           count,
           prevUrl: ``,
           nextUrl: `http://localhost:5000/fake/page?page=${page + 1}`
         })

       } else if (page === pages - 1) {
         res.json({
           products: products,
           currentPage: page,
           pages,
           count,
           prevUrl: `http://localhost:5000/fake/page?page=${page - 1}`,
           nextUrl: ``
         })
       } else if (page > 0 && page < pages) {
         res.json({
           products: products,
           currentPage: page,
           pages,
           count,
           prevUrl: `http://localhost:5000/fake/page?page=${page - 1}`,
           nextUrl: `http://localhost:5000/fake/page?page=${page + 1}`
         })
       }else {
         res.status(404).json({message:'ups not found~!'})
       }

     });
 });
}

//byid
static getId(req, res, next) {
  Productfake.findById(req.params.id, function (err, product) {
    if (err) return console.log(err);
    res.status(200).json(product);
  })
}


}
module.exports = Productfakeclass;
