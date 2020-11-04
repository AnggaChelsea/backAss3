
module.exports = function Cart(oldCart){
this.items=oldCart.items;
this.totalQty=oldCart.totalQty
this.totalPrice=oldCart.totalPrice;

this.add = function(item, id){
console.log(item)
console.log(id)

var storedItem = this.items[id]
console.log(storedItem)

if(!storedItem){
storedItem = this.item[id]= {item: item, qty:0, price:0};
}
storedItem.qty++;
storedItem.price =storedItem.item.price*storedItem.qty;
this.totalQty++
this.totalPrice += storedItem.item.price;}

this.generateArry = function(){
var arr= [];
for(var id in this.items){
arr.push(this.items[id]);
}
return arr;
}
}



//
// const mongoose = require('mongoose')
//
// const CartSchema = new mongoose.Schema(
//   {
//     _userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required:true,
//     },
//     products: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref:'products',
//       required:true,
//     },
//     modifiedOn: {
//       type: Date,
//       default: Date.now
//     },
//     qty:{
//       type:Number,
//       default:0,
//       required:true
//     },
//     totalPrice:{
//       type:Number,
//       default:0,
//       required:true
//     }
//   },
//   { timestamps: true }
// );
//
// module.exports = mongoose.model("Cart", CartSchema);
