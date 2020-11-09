const express = require('express');
const router = express.Router();
const Productfakeclass = require('../controllers/Productfake');

router.post('/', Productfakeclass.postget);
router.get('/page',Productfakeclass.getpage);
router.get('/:id', Productfakeclass.getId);

module.exports = router;
