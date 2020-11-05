const router = require('express').Router();
const Product = require('../controllers/Product');

router.post('/create', Product.post);
router.get('/page', Product.getPage);
router.get('/', Product.getall);
router.get('/:id', Product.getId)

module.exports = router;
