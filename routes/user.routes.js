import { Router } from "express";
import { Login, Logout, Register, validateToken, AddToCart, AddToWishlist, Cart, DeleteCart } from "../controllers/user.controllers.js";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/validate-token", validateToken);
router.get("/logout", Logout);
router.post("/add-to-cart", AddToCart);
router.post("/add-to-wishlist", AddToWishlist);
router.post("/cart", Cart);
router.post("/delete-cart", DeleteCart);

export default router;