const mongoose = require('mongoose');

const alamatSchema = new mongoose.Schema({
    _userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    desa: {
        type:String,
        required:true,
    },
    kecamatan:{
        type:String,
        required:true,
    },
    kabupaten:{
        type:String,
        required:true,
    },
    provinsi:{
        type:String,
        required:true,
    },
    negara:{
        type:String,
        required:true,
    },
    nohp:{
        type:String,
        required:true,
    },
    kodepos:{
        type:String,
        required:true,
    },
})
const Alamat = mongoose.model('Alamat', alamatSchema); 
module.exports = Alamat;