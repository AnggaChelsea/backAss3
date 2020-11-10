const router = require('express').Router();
const userController = require('../controllers/UserController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/data', userController.getList);
router.get('/:id', userController.getId)
router.put('/:id', userController.editUser);
router.delete('/:id', userController.delete);

module.exports = router;
