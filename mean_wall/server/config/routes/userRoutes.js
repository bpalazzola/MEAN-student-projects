const userController = require('../../controllers/userController');
const router = require('express').Router();

router.post('/', userController.create);
router.post('/login', userController.login);
router.delete('/logout/:id', userController.logout)
router.delete('/:id', userController.delete);
router.put('/:id', userController.update);


module.exports = router;
