import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById,
} from "../controllers/products.controller.js";
import { isAdmin, isModerator, verifyToken } from "../middleware/authJwt.js";

const router = Router();

router.get("/", getProducts);

router.post("/", [verifyToken, isModerator], createProduct);

router.get("/:productId", getProductById);

router.put("/:productId", [verifyToken, isAdmin], updateProductById);

router.delete("/:productId", [verifyToken, isAdmin], deleteProductById);

export default router;
