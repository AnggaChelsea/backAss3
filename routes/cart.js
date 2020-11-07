const router = require('express').Router();
const CartController = require('../controllers/CartController');

router.post('/', CartController.post);

module.exports = router;
