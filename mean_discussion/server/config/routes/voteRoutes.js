const voteController = require('../../controllers/voteController.js');
const router = require('express').Router();

router.post('/', voteController.create);

module.exports = router;
