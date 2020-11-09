const router = require('express').Router();

const CategoryControllerfake = require('../controllers/CategoryControllerfake')

router.get('/',CategoryControllerfake.get);

//display all produts in a specific Category
router.get('/:category',);

module.exports = router;
