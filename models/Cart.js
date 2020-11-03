
const mongoose = require("mongoose");


let cart = null;

module.exports = class Cart {

    static save(product) {

        if (cart === null) {
            cart = { products: [], totalPrice: 0 };
        }

        const existingProductIndex = cart.products.findIndex(p => p.id == product.id); // to check product is existing in cart
        if (existingProductIndex >= 0) { // exist in cart already
            const exsitingProduct = cart.products[existingProductIndex];
            exsitingProduct.qty += 1;
        } else { //not exist
            product.qty = 1;
            cart.products.push(product);
        }

        cart.totalPrice += product.price;
    }

    static getCart() {
        return cart;
    }

    static delete(productId) {
        const isExisting = cart.products.findIndex(p => p.id == productId);
        if (isExisting >= 0) {
            cart.products.splice(isExisting, 1);
        }
    }

}


const CartSchema = new mongoose.Schema(
  {
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required:true,
    },
    products: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'products',
      required:true,
    },
    modifiedOn: {
      type: Date,
      default: Date.now
    },
    qty:{
      type:Number,
      default:0,
      required:true
    },
    totalPrice:{
      type:Number,
      default:0,
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
