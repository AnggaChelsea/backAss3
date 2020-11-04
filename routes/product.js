const router = require('express').Router();
const Product = require('../controllers/Product');

router.post('/create', Product.post);
router.get('/', Product.get)
router.get('/:id', Product.getId)

module.exports = router;
