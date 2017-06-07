const commentController = require('../../controllers/commentController');
const router = require('express').Router();

router.get('/message/:id', commentController.index);
router.get('/:id', commentController.show);
router.post('/', commentController.create);
router.delete('/:id', commentController.delete);
router.put('/:id', commentController.update);


module.exports = router;
