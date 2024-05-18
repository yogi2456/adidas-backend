import { Router } from 'express'
import ProductRouter from './product.routes.js'
import UserRouter from './user.routes.js'

const router = Router();


router.use("/product", ProductRouter);
router.use("/user", UserRouter);

export default router;