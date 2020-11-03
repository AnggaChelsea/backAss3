const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({

  namabarang: {
    type: String,
    required: true
  },
  tumbnail:[{
    type:String,
  }],
  gambar: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true
  },
  harga: {
    type: Number,
    required: true
  },
  jumlah: {
    type: Number,
    required: true
  },
  deskripsisingkat: {
    type: String,
    required: true
  },
  published: {
    type:Date,
    default: Date.now(),
  },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
