const mongoose = require('mongoose');

let ItemSchema = new mongoose.Schema(
  {
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required:true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Product',
      required:true,
    },
    modifiedOn: {
      type: Date,
      default: Date.now
    },
    quantity:{
      type:Number,
      min: [1, 'quantity can not be less than 1']
    },
    price:{
      type:Number,
      required:true
    }
  },
  { timestamps: true }
);

const CartSchema = new mongoose.Schema({
  items: [ItemSchema],
  subTotal:{
    default:0,
    type:Number
  }
},{timestamps:true})

module.exports = mongoose.model("Cart", CartSchema);
