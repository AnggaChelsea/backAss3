const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    description: String
});

const productfake = mongoose.model('Productfake', ProductSchema);
module.exports = productfake;
