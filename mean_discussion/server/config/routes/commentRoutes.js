const commentController = require('../../controllers/commentController.js');
const router = require('express').Router();

router.post('/', commentController.create);
router.get('/:id', commentController.show);
module.exports = router;
