import { Router } from "express";

import authController from "./../../controllers/auth.controller";
import { loginSchema, registerSchema } from "../../schemas/auth.schema";
import { validateSchema } from "../../middlewares/validateSchema";

const authRouter = Router();



authRouter.post("/register", validateSchema(registerSchema), authController.register);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     description: Logs in a user with credentials and returns a token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             example:
 *               id: "your_id_here"
 *               username: "your_username_here"
 *               email: "your_email_here"
 *      400:
 *       description: Bad request
 *      content:
 *       application/json:
 *       example:
 *       err: "Bad request"
 */

authRouter.post("/login", validateSchema(loginSchema), authController.login);
authRouter.post("/logout", authController.logout);
authRouter.get("/verify", authController.verify);
authRouter.get("/profile/:id", authController.profile);

export default authRouter;
