const router = require('express').Router();
const userKategori = require('../controllers/KategotyController')

router.patch('/:id', userKategori.patch);
router.post('/:id', userKategori.post)

module.exports = router
