import { Router } from "express";

// import { authRequired } from "../middlewares/validateToken";
import { login, logout, register } from './../../controllers/auth'

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

// router.get("/profile", authRequired, profile);

export default router;