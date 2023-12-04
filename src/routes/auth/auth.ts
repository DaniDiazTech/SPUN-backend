import { Router } from "express";

import { login, logout, register, verify, profile } from "./../../controllers/auth";
import { loginSchema, registerSchema } from "../../schemas/auth.schema";
import { validateSchema } from "../../middlewares/validateSchema";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/verify", verify);

router.get("/profile/:id", profile);

export default router;
