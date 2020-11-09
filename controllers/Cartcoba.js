const Cart = require('../models/cart');
const products = require('../models/Product');

class Cartcoba {
static get(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  var product = products.filter(function(item) {
    return item.id == productId;
  });
  cart.add(product[0], productId);
  consolr.log(cart)
}
}

module.exports = Cartcoba;
