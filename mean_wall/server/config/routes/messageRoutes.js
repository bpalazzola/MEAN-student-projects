const messageController = require('../../controllers/messageController');
const router = require('express').Router();

router.get('/', messageController.index);
router.get('/:id', messageController.show);
router.post('/', messageController.create);
router.delete('/:id', messageController.delete);
router.put('/:id', messageController.update);

module.exports = router;
