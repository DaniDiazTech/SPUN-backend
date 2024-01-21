import { Router } from "express";

import authController from "./../../controllers/auth.controller";
import { loginSchema, registerSchema, newPasswordSchema } from "../../schemas/auth.schema";
import { validateSchema } from "../../middlewares/validateSchema";

import { verifyToken } from "./../../middlewares/auth/verifyToken";


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
 *               isAdmin:
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
authRouter.get("/profile/:id", verifyToken, authController.profile);
/**
 * @swagger
 * /api/auth/verify-email/{token}:
 *   get:
 *     tags:
 *       - auth
 *     parameters:
 *       - name: token
 *         in: path
 *         description: Token that was sent to the user email
 *         required: true
 *         schema:
 *           type: string
 *     summary: Verify Email
 *     description: Verify  if the token is valid and if it is, verify the user email, the token is sent to the user email when the user register
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: string
 */
authRouter.get("/verify-email/:token", authController.verifyEmail);

/**
 * @swagger
 * /api/auth/forgot-password/{email}:
 *   get:
 *     tags:
 *       - auth
 *     parameters:
 *       - name: email
 *         in: path
 *         description: User email
 *         required: true
 *         schema:
 *           type: string
 *     summary: Forgot Password
 *     description: Send an email with a token to reset the password
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
authRouter.get("/forgot-password/:email",authController.forgotPassword);

/**
 * @swagger
 * /api/auth/forgot-password/new/{token}:
 *   post:
 *     tags:
 *       - auth
 *     parameters:
 *       - name: token
 *         in: path
 *         description: Token that was sent to the user email
 *         required: true
 *         schema:
 *           type: string
 *     summary: New Password
 *     description: Set a new password to the user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string   
 *                 format: password
 *     responses:
 *       '200':
 *         description: Successful response
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
 *                 isAdmin:
 *                   type: boolean
 *                 isVerified:
 *                   type: boolean
 */
 
authRouter.post("/forgot-password/new/:token", validateSchema(newPasswordSchema), authController.postNewPassword);


export default authRouter;
