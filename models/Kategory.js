const mongoose = require('mongoose');

const KategorySchema = new mongoose.Schema({

    _productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required: true,
    },
    kategori: {
        type: String,
        required: true
    },

})

const Kategory = mongoose.model('Kategory', KategorySchema);
module.exports = Kategory;
