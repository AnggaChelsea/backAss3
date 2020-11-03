const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const userRoutes = require('./user');
const alamtrouter = require('./alamat')
const Kategori = require('./kategoriRouter');
const Product = require('./product');
const cart = require('./cart')
const masukkeranjang = require('./keranjangRouter')
const Comment = require('./comment');


const errorHandler = require('../middlewares/errorHandler');


router.use('/product', Product);
router.use('/kategori', Kategori);
router.use('/users', userRoutes);
// router.use('/cart', cart);
router.use('/comment', authentication, Comment)
router.use('/alamat', alamtrouter);
router.post('/keranjang', masukkeranjang);
router.use(errorHandler);

module.exports = router;
