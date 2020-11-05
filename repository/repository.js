const Cart = require('../models/Cart');

exports.cart = async () => {
  const carts = await Cart.find().populate({
    path:'items.productId',
    select:''
  })
}
