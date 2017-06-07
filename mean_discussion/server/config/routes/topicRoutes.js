const topicController = require('../../controllers/topicController.js');
const router = require('express').Router();

router.get('/', topicController.index);
router.get('/:id', topicController.show);
router.post('/', topicController.create);
router.delete('/:id', topicController.delete);
router.put('/:id', topicController.update);

module.exports = router;
