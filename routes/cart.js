const router = require('express').Router();
const CartController = require('../controllers/CartController');


router.post('/', CartController.post);

router.get('/',CartController.get);

router.get('/all', CartController.getcart)

router.put('/:id',CartController.put);

router.delete('/:id',CartController.delete);

module.exports = router;
