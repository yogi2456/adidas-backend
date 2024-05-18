import { Router } from 'express'
import { AddProduct, GetProductsByCategoryPrice, GetAllProduts, Projecting, GetProductBySeller } from '../controllers/product.controllers.js';

const router = Router();


router.post("/add-product", AddProduct);
router.post("/get-products-by-category-price", GetProductsByCategoryPrice);
router.get("/projecting", Projecting);
router.post("/get-product-by-seller", GetProductBySeller);
router.get("/get-all-products", GetAllProduts)

export default router;