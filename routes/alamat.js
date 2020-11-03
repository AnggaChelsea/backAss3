const router = require('express').Router();
const alamat = require('../controllers/Alamat')

router.post('/', alamat.post)
router.put('/:id', alamat.editalamat);
router.delete('/:id', alamat.delete);

module.exports = router;