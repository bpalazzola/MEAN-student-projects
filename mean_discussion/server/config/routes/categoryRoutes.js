const categoryController = require('../../controllers/categoryController.js');
const router = require('express').Router();

router.get('/', categoryController.index);

module.exports = router;
