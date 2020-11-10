const Cart = require("../models/Cart");
const Products = require("../models/Product");
const {
  NotFoundInCatch,
  error500,
  error404,
  error422
} = require("../lib/error");

class CartController {
static create(req, res, next){
  const { ProductIds } = req.body;
  const { Quantity } = req.body;
  const cart = new Cart({ProductIds,Quantity });
  cart.save()
    .then(cart => {
      res.status(200).json({message:'Cart created successfully.', data:cart});
    })
    .catch(next);
};

static getid(req, res, next){
  Cart.findById(req.params.id)
    .select({'ProductIds._id': 0})
    .then(cartOne => {
      if (!cartOne) error404(res, "Cart not found with id " + req.params.id);
      const cart = cartOne;
      const ids = cart.ProductIds.map( m => m.ProductId);
      console.log(ids)
      const filter = { '_id': { '$in': ids}};
      Products.find().where(filter)
      // .populate('Category')
      // .populate('Origin')
      .then(
        products => {
          // console.log(products)
          const data = {
            _id: cart._id,
            ProductIds : cart.ProductIds,
            products: products
          }
          res.status(200).json({message:'succes', data:data});
        }
      );

    })
    .catch(next);
};

static updateCart(req, res, next){
  const id = req.params.id;
  const data = req.body;
    Cart.findById(id).then(
      cart => {
        if (!cart) error404(res, "Cart not found with id " + id);
        // console.log({_id: `ObjectId("${id}")`}, { $push: {'ProductIds': data} })
        Cart.findOneAndUpdate({'_id': id}, { '$push': {'ProductIds': data} })
        .then(respon => {
            res.status(200).json({message:'Cart created successfully add to cart.', data:respon});
        });
      }
    )
    .catch(next);
};

static updateCartItemQty(req, res, next){
  const id = req.params.id;
  const data = req.body;
    Cart.findById(id).then(
      cart => {
        // console.log(id, data)
        if (!cart) error404(res, "Cart not found with id " + id);
        Cart.findOneAndUpdate({_id: id, 'ProductIds.ProductId': data.ProductId}, { $set: {'ProductIds.$.Quantity': data.Quantity} })
        .then(cart => {
          res.status(200).json({message:'Cart created successfully update', data:cart});
        });
      }
    )
    .catch(next);
};

static deleteCartItem(req, res, next){
  const id = req.params.id;
  const data = req.body;
    Cart.findById(id).then(
        cart => {
          if (!cart) error404(res, "Cart not found with id " + id);
          Cart.findOneAndUpdate({_id: id}, { $pull: {'ProductIds': { 'ProductId' : data.ProductId } } })
          .then(cart => {
            res.status(200).json({message:'Cart delete successfully .', data:cart});
          });
        }
    )
    .catch(next);
};

static deleteCart(req, res, next){
  Cart.findByIdAndRemove(req.params.id)
    .then(cart => {
      if (!cart) error404(res, "Cart not found with id " + req.params.id);
    res.status(200).json({message:'Cart delete successfully.', data:cart});
    })
    .catch(next);
};

}
module.exports = CartController
