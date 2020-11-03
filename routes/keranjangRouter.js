const router = require('express').Router();
const keranjang = require('../controllers/KeranjangUser');

router.post('/:id', keranjang.post)

module.exports = router
