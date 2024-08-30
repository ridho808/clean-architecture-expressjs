import { Router } from 'express';
import ProductController from './controllers/product.controller.js';
import ProductDTO from './dto/product.dto.js';

const router = Router();
const productController = new ProductController();

router.post('/', ProductDTO.createProduct, productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', ProductDTO.updateProduct, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default (app) => {
    app.use('/products', router);
};

