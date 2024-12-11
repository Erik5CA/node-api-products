import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.get("/:productId", getProductById);

router.put("/:productId", updateProductById);

router.delete("/:productId", deleteProductById);

export default router;
