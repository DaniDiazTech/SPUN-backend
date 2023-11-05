import { Router } from "express";
import { login, logout, register, verify } from "./../../controllers/auth";

const router = Router();

router.post("/login", login);

router.post("/logout", logout);

router.post("/register", register);

router.get("/verify", verify);

export default router;
