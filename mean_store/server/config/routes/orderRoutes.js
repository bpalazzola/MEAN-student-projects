const router = require('express').Router();
const orderController = require('../../controllers/orderController.js')

router.get('/', orderController.index);
router.get('/edit/:id', orderController.show);
router.get('/:id', orderController.show);
router.post('/', orderController.create);
router.delete('/:id', orderController.delete);
router.put('/:id', orderController.update);

module.exports = router;
