const router = require('express').Router();
const cartController = require('../controllers/CartController');

router.post('/', cartController.create);

router.get('/:id', cartController.getid);

router.post('/:id', cartController.updateCart);

router.post('/update-item-qty/:id', cartController.updateCartItemQty);

router.post('/delete-item/:id', cartController.deleteCartItem);

router.delete('/:id', cartController.deleteCart);

module.exports = router;
