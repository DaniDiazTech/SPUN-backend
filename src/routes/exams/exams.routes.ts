import { Router } from "express";
import examController from "../../controllers/exam.controller";
import { isAdmin } from "../../middlewares/auth";
import { postExamSchema, postExamTakeSchema } from "../../schemas/exam.schema";
import { validateSchema } from "../../middlewares/validateSchema";
const examRouter = Router();
/**
 * @swagger
 * /api/exam:
 *   get:
 *     tags:
 *       - exam
 *     summary: Get all the
 *     description: This is the endpoint for getting all the exams, each exam could have multiple questions blocks, each question block could have multiple questions
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exams:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string  
 *                       questionsBlocks:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             _id:
 *                               type: string
 *                             subject:
 *                               type: string
 *                             questions:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   text:
 *                                     type: string
 *                                   choices:
 *                                     type: array
 *                                     items:
 *                                       type: string
 *                                   answer:
 *                                     type: string
 *                                   _id:
 *                                     type: string
 *                             content:
 *                               type: string
 *                             createdAt:
 *                               type: string
 *                               format: date-time
 *                             updatedAt:
 *                               type: string
 *                               format: date-time
 *                             __v:
 *                               type: integer
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       __v:
 *                         type: integer
 */
examRouter.get("/", examController.getExams);
/**
 * @swagger
 * /api/exam/random:
 *   get:
 *     tags:
 *       - exam
 *     summary: Get random exam by subject and number of questions
 *     description: This is the endpoint for getting one random exam, the user should provide the subject Matématicas, Ciencias Sociales, Ciencias Naturales, Análisis de imagen, Análisis textual and the number of questions that the exam should have
 *     parameters:
 *       - in: query
 *         name: subject
 *         schema:
 *           type: string
 *         required: true
 *         description: The subject of the exam Matématicas, Ciencias Sociales, Ciencias Naturales, Análisis de imagen, Análisis textual
 *       - in: query
 *         name: number
 *         schema:
 *           type: integer
 *         required: true
 *         description: The number of questions to be included in the exam
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exam:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string  
 *                     questionsBlocks:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           subject:
 *                             type: string
 *                           questions:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 text:
 *                                   type: string
 *                                 choices:
 *                                   type: array
 *                                   items:
 *                                     type: string
 *                                 answer:
 *                                   type: string
 *                                 _id:
 *                                   type: string
 *                           content:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                           __v:
 *                             type: integer
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     __v:
 *                       type: integer
 */
examRouter.get("/random", examController.getRandomExam);
/**
 * @swagger
 * /api/exam/{id}:
 *   get:
 *     tags:
 *       - exam
 *     summary: Get a exam by id
 *     description: This is the endpoint for getting one exam by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the exam
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exam:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string  
 *                     questionsBlocks:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           subject:
 *                             type: string
 *                           questions:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 text:
 *                                   type: string
 *                                 choices:
 *                                   type: array
 *                                   items:
 *                                     type: string
 *                                 answer:
 *                                   type: string
 *                                 _id:
 *                                   type: string
 *                           content:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                           __v:
 *                             type: integer
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     __v:
 *                       type: integer
 */
examRouter.get("/:id", examController.getExam);
/**
 * @swagger
 * /api/exam/user/{id}:
 *   get:
 *     tags:
 *       - exam
 *     summary: Get all the exam takes by user id
 *     description: This is the endpoint for getting all the exam takes by user id, an exam take is the result of a user taking an exam
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the user
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 examTakes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       exam:
 *                         type: object
 *                         properties:
 *                           title:
 *                             type: string
 *                           description:
 *                             type: string  
 *                           questionsBlocks:
 *                             type: array
 *                             items:
 *                               type: string
 *                           subject:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                           __v:
 *                             type: integer
 *                       answers:
 *                         type: array
 *                         items:
 *                           type: string
 *                       startExam:
 *                         type: string
 *                         format: date-time
 *                       endExam:
 *                         type: string
 *                         format: date-time
 *                       user:
 *                         type: string
 *                       score:
 *                         type: number
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       __v:
 *                         type: integer
 * 
 */
examRouter.get("/user/:id", examController.getExamTakes);
/**
 * @swagger
 * /api/exam/take/{id}:
 *   post:
 *     tags:
 *       - exam
 *     summary: Create a new exam take
 *     description: This is the endpoint for creating a new exam take, the user should provide the exam id that takes
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the exam
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               answers:
 *                 type: array
 *                 minItems: 1
 *                 items:
 *                   type: string
 *               startExam:
 *                 type: string
 *                 format: date-time
 *               endExam:
 *                 type: string
 *                 format: date-time    
 *               score:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 examTake:
 *                   type: object
 *                   properties:
 *                       exam:
 *                         type: string
 *                       answers:
 *                         type: array
 *                         items:
 *                           type: string
 *                       startExam:
 *                         type: string
 *                         format: date-time
 *                       endExam:
 *                         type: string
 *                         format: date-time
 *                       user:
 *                         type: string
 *                       score:
 *                         type: number
 *                       _id:
 *                         type: string
 * 
 */
examRouter.post("/take/:id", validateSchema(postExamTakeSchema), examController.postExamTake);
/**
 * @swagger
 * /api/exam/create:
 *   post:
 *     tags:
 *       - exam
 *     summary: Create a new exam
 *     description: This is the endpoint for creating a new exam by admin
*     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: str
 *               questionBlocks:
 *                 type: array
 *                 items:
 *                   type: string
 *               subject:
 *                 type: string
 *               isSimulacrum:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exam:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string  
 *                     questionsBlocks:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           subject:
 *                             type: string
 *                           questions:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 text:
 *                                   type: string
 *                                 choices:
 *                                   type: array
 *                                   items:
 *                                     type: string
 *                                 answer:
 *                                   type: string
 *                                 _id:
 *                                   type: string
 *                           content:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                           __v:
 *                             type: integer
 *                     subject:
 *                       type: string
 *                     isSimulacrum:
 *                       type: boolean
 *                     _id:
 *                       type: string
 *                     createdAt:   
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     __v:
 *                       type: integer
 */
examRouter.post("/create", isAdmin, validateSchema(postExamSchema), examController.postExam);

export default examRouter;
