import { Router } from 'express'
import { AddProduct, GetProductsByCategoryPrice, GetAllProduts, Projecting, GetProductBySeller, GetSingleProduct, DeleteProduct, UpdateProduct, YourProducts } from '../controllers/product.controllers.js';

const router = Router();


router.post("/add-product", AddProduct);
router.post("/get-products-by-category-price", GetProductsByCategoryPrice);
router.get("/projecting", Projecting);
router.post("/get-product-by-seller", GetProductBySeller);
router.get("/get-all-products", GetAllProduts);
router.get("/get-single-product", GetSingleProduct);
router.post("/update-product", UpdateProduct)
router.delete("/delete-product", DeleteProduct);
router.post("/your-products", YourProducts);


export default router;