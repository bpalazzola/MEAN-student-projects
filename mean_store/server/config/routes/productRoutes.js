const router = require('express').Router();
const productController = require('../../controllers/productController.js')

router.get('/', productController.index);
router.get('/edit/:id', productController.show);
router.get('/:id', productController.show);
router.post('/', productController.create);
router.delete('/:id', productController.delete);
router.put('/:id', productController.update);

module.exports = router;
