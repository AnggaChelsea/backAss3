const router = require('express').Router();
const CommentController = require('../controllers/CommentController');

router.post('/comment', CommentController.post);

module.exports = router;
