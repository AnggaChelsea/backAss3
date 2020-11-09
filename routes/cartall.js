const express = require('express');
const router = express.Router();
const Cartcoba = require('../controllers/Cartcoba')

router.get('/:id', Cartcoba.get);

module.exports = router;
