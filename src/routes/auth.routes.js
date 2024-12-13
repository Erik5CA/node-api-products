import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";
import {
  checkRolesExisted,
  checkUserExist,
} from "../middleware/verifySignup.js";

const router = Router();

router.post("/signin", signIn);

router.post("/signup", [checkUserExist, checkRolesExisted], signUp);

export default router;
