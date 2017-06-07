const router = require('express').Router();
const customerController = require('../../controllers/customerController.js')

router.get('/', customerController.index);
router.get('/edit/:id', customerController.show);
router.get('/:id', customerController.show);
router.post('/', customerController.create);
router.delete('/:id', customerController.delete);
router.put('/:id', customerController.update);

module.exports = router;
