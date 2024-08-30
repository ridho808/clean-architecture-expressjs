import { body, param } from 'express-validator';

const ProductDTO = {
    createProduct: [
        body('title').notEmpty().withMessage('Title is required'),
        body('description').notEmpty().withMessage('Description is required'),
        body('price').notEmpty().withMessage('Price is required'),
        body('stock').notEmpty().withMessage('Stock is required'),
    ],
    updateProduct: [
        param('id').notEmpty().withMessage('Product ID is required'),
        body('title').notEmpty().withMessage('Title is required'),
        body('description').notEmpty().withMessage('Description is required'),
        body('price').notEmpty().withMessage('Price is required'),
        body('stock').notEmpty().withMessage('Stock is required'),
    ],
}

export default ProductDTO;

