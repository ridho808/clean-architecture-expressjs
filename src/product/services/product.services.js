import Product from '../model/product.model.js';

class ProductService {
    static async createProduct(productData) {
        try {
            const product = await Product.create(productData);
            return product;
        } catch (error) {
            throw error;
        }
    }

    static async AllProduct() {
        try {
            const products = await Product.findAll();
            return products;
        } catch (error) {
            throw error;
        }
    }

    static async getProductById(id) {
        try {
            const product = await Product.findOne({ where: { id } });
            return product;
        } catch (error) {
            throw error;
        }
    }

    static async updateProduct(id, productData) {
        try {
            const product = await Product.findOne({ where: { id } });
            if (product === 0) {
                throw new Error('Product not found');
            }
            const updatedProduct = await Product.update(productData, { where: { id } });
            return updatedProduct;
        } catch (error) {
            throw error;
        }
    }

    static async deleteProduct(id) {
        try {
            const deletedRowCount = await Product.destroy({ where: { id } });
            if (deletedRowCount === 0) {
                throw new Error('Product not found');
            }
            return deletedRowCount;
        } catch (error) {
            throw error;
        }
    }
}

export default ProductService;
