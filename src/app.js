import express from 'express';
import productModule from './product/product.module.js';

const app = express();

app.use(express.json());
productModule(app);


export default app;