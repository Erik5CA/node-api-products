import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById,
} from "../controllers/products.controller.js";
import { verifyToken } from "../middleware/authJwt.js";

const router = Router();

router.get("/", getProducts);

router.post("/", verifyToken, createProduct);

router.get("/:productId", getProductById);

router.put("/:productId", verifyToken, updateProductById);

router.delete("/:productId", verifyToken, deleteProductById);

export default router;
