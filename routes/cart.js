const router = require('express').Router;
const cartController = require('../controllers/CartController')

router.post('/add-to-cart', cartController.addToCart);

router.get('/cart', cartController.getCart);

router.post('/delete-cart', cartController.deleteInCart);

module.exports = router;
