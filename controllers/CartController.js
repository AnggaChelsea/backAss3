const Cart = require('../models/Cart');
const Product = require('../models/Product');

class CartController{
  static post(req, res, next){
    const user = req.body.user;
    const item = {
      product: req.body.product,
      quantity: req.body.quantity
    };

    Cart.findOne({ user: user })
      .then((foundCart) => {
        if (foundCart) {
          let products = foundCart.items.map((item) => item.product + '');
          if (products.includes(item.product)) {
            Cart.findOneAndUpdate({
              user: user,
              items: {
                $elemMatch: { product: item.product }
              }
            },
              {
                $inc: { 'items.$.quantity': item.quantity }
              })
              .exec()
              .then(() => res.end());
          } else {
            foundCart.items.push(item);
            foundCart.save().then(() => res.end());
          }
        } else {
          Cart.create({
            user: user,
            items: [item]
          })
            .then(() => res.end());
        }
      });
  }
}

module.exports = CartController;
