const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const userRoutes = require('./user');
const alamtrouter = require('./alamat')
const Kategori = require('./kategoriRouter');
const Product = require('./product');
const cartRoutes = require('./cart')
const Comment = require('./comment');
const productfake = require('./productfake');


const errorHandler = require('../middlewares/errorHandler');


router.use('/product', Product);
router.use('/kategori', Kategori);
router.use('/users', userRoutes);
router.use('/fake', productfake);
// router.use('/cart', cart);
router.use('/comment', authentication, Comment)
router.use('/cart', cartRoutes);
router.use('/alamat', alamtrouter);
router.use(errorHandler);

module.exports = router;
