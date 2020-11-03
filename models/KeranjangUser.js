const mongoose = require('mongoose')

const keranjangUserSchema = new mongoose.Schema({
    _userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pilihbarang:String,
})

const Keranjang = mongoose.model('Keranjang', keranjangUserSchema);

module.exports = keranjangUserSchema;