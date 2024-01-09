import { Router } from "express";

import authController from "./../../controllers/auth.controller";
import { loginSchema, registerSchema } from "../../schemas/auth.schema";
import { validateSchema } from "../../middlewares/validateSchema";

const authRouter = Router();


/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *       - auth
 *     summary: Signup
 *     description: This is the signup endpoint for the app, returns a token in the cookie
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               username:
 *                 type: string
 *               email:   
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string   
 *                 format: password
 *               is_admin:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Add Value Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 */
authRouter.post("/register", validateSchema(registerSchema), authController.register);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - auth
 *     summary: Login
 *     description: Login
 *     operationId: ctrlValue.addValue
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       '200':
 *         description: Add Value Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 */
authRouter.post("/login", validateSchema(loginSchema), authController.login);
/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     tags:
 *       - auth
 *     summary: Logout
 *     description: Logout delete the cookie
 *     responses:
 *       '200':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
authRouter.post("/logout", authController.logout);
/**
 * @swagger
 * /api/auth/verify:
 *   get:
 *     tags:
 *       - auth
 *     summary: Verify if the current user is logged in
 *     description: Verify if the current user is logged in
 *     operationId: verifyToken
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 createdAt:
 *                   type: string
 *                 username:
 *                   type: string
 *                 exams:
 *                   type: array
 */
authRouter.get("/verify", authController.verify);
/**
 * @swagger
 * /api/auth/profile/{id}:
 *   get:
 *     tags:
 *       - auth
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID to get profile
 *         required: true
 *         schema:
 *           type: string
 *     summary: Get Profile
 *     description: Get a user profile (non-admin) with the exams taken
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 createdAt:
 *                   type: string
 *                 username:
 *                   type: string
 *                 exams:
 *                   type: array
 */

authRouter.get("/profile/:id", authController.profile);

export default authRouter;
