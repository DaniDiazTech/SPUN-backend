import { Router } from "express";

import authController from "./../../controllers/auth.controller";
import { loginSchema, registerSchema } from "../../schemas/auth.schema";
import { validateSchema } from "../../middlewares/validateSchema";

const authRouter = Router();

authRouter.post("/register", validateSchema(registerSchema), authController.register);
authRouter.post("/login", validateSchema(loginSchema), authController.login);
authRouter.post("/logout", authController.logout);
authRouter.get("/verify", authController.verify);
authRouter.get("/profile/:id", authController.profile);

export default authRouter;
