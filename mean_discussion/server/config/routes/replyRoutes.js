const replyController = require('../../controllers/replyController.js');
const router = require('express').Router();

router.post('/', replyController.create);
router.get('/:id', replyController.show);
module.exports = router;
