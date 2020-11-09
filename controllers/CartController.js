const mongoose = require('mongoose')
const Cart = require('../models/Cart');
const Product = require('../models/Product');

class CartController{

  static getcart(req,res,next){
    Cart.find()
    .populate('items.product')

    .then((result)=>{
      res.status(200).json({success:true, data:result})
    })
    .catch(next);
  }

  // static postcart(req, res, next){
  //   const user = req.body.user;
  //   const item = {
  //     product:req.body.product,
  //   }
  //   const qty = req.body.quantity;
  //   const total = req.body.total;
  // }

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

  static get(req, res, next){
   Cart.findOne({ user: req.userId })
   .populate('items.product')
   .exec((err, cart) => {
     if (!cart) {
       return res.send(null);
     }
     // res.send(cart);
     then((cart)=>{
       res.status(200).json({message:'ok', data:cart})
     })
   })
 }

 static put(req, res){
   Cart.findById(req.body.cartId)
     .then((foundCart) => {
       foundCart.items = foundCart.items.filter((item) => item._id != req.body.itemId);
       foundCart.save()
       then((cart)=>{
         res.status(200).json({succes:true, message:'data saved', data:cart})
       })
       .catch(next);
     });
 }

 static delete(req, res, next){
   Cart.findByIdAndRemove(req.query.id)
     .then((cart)=>{
       res.status(200).json({status:'ok deleted'})
     })
     .catch(next);
 }


}

module.exports = CartController;
