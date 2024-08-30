import ProductService from '../services/product.services.js';

class ProductController {
    async createProduct(req, res) {
        try {
            const product = await ProductService.createProduct(req.body);
            return res.status(201).json({ message: "Product created successfully", product });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getAllProducts(req, res) {
        try {
            const products = await ProductService.AllProduct();
            return res.status(200).json({ message: "Products fetched successfully", products });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getProductById(req, res) {
        try {
            const product = await ProductService.getProductById(req.params.id);
            return res.status(200).json({ message: "Product fetched successfully", product });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const product = await ProductService.updateProduct(+req.params.id, req.body);
            return res.status(200).json({ message: "Product updated successfully", product });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const product = await ProductService.deleteProduct(req.params.id);
            return res.status(200).json({ message: "Product deleted successfully", product });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}


export default ProductController;