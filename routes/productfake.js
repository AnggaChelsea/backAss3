const express = require('express');
const router = express.Router();
const Productfakeclass = require('../controllers/Productfake');

router.post('/', Productfakeclass.postget);


module.exports = router;
