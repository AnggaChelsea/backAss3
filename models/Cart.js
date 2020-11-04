const mongoose = require('mongoose')

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
