const router = require('express').Router();
const CommentController = require('../controllers/CommentController');

router.post('/', CommentController.post);

module.exports = router;
