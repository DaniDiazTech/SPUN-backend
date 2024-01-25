import { Router } from "express";
import QuestionBlockController from "../../controllers/questionBlock.controller";
import { postQuestionBlockSchema } from "../../schemas/questionBlock.schema";
import { validateSchema } from "../../middlewares/validateSchema";
import { isAdmin } from "../../middlewares/auth";
import { uploadImage } from "../../services/questionBlock/postImageQuestionBlock";
const QuestionBlockRouter = Router();
/**
 * @swagger
 * /api/questionBlock:
 *   get:
 *     tags:
 *       - questionBlock
 *     summary: Get all questionBlocks
 *     description: This is the endpoint for getting all questionBlocks, each containing a subject, questions, content, and timestamp information.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 questionsBlocks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       subject:
 *                         type: string
 *                       questions:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             text:
 *                               type: string
 *                             choices:
 *                               type: array
 *                               items:
 *                                 type: string
 *                             answer:
 *                               type: string
 *                             _id:
 *                               type: string
 *                       content:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       __v:
 *                         type: integer
 */
QuestionBlockRouter.get("/", QuestionBlockController.getQuestionBlocks);
/**
 * @swagger
 * /api/questionBlock/{id}:
 *   get:
 *     tags:
 *       - questionBlock
 *     summary: Get all questionBlocks or a specific one by ID
 *     description:
 *       This is the endpoint for getting a list of questionBlocks or a specific one by providing an ID.
 *       Each questionBlock contains a subject, questions, content, and timestamp information.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: ID of the specific questionBlock to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                questionBlock:
 *                  type: object
 *                  properties:
 *                    _id:
 *                      type: string
 *                    subject:
 *                      type: string
 *                    questions:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          text:
 *                            type: string
 *                          choices:
 *                            type: array
 *                            items:
 *                              type: string
 *                          answer:
 *                            type: string
 *                          _id:
 *                            type: string
 *                    content:
 *                      type: string
 *                    createdAt:
 *                      type: string
 *                      format: date-time
 *                    updatedAt:
 *                      type: string
 *                      format: date-time
 *                    __v:
 *                      type: integer
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   description: Error message
 */

QuestionBlockRouter.get("/:id", QuestionBlockController.getQuestionBlock);
/**
 * @swagger
 * /api/questionBlock/bySubject/{subject}:
 *   get:
 *     tags:
 *       - questionBlock
 *     summary: Get all questionBlocks that match a subject
 *     description: This is the endpoint for getting all questionBlocks that match a subject, each containing a subject, questions, content, and timestamp information.
 *     parameters:
 *       - in: path
 *         name: subject
 *         schema:
 *           type: string
 *         description: subject
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 questionsBlocks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       subject:
 *                         type: string
 *                       questions:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             text:
 *                               type: string
 *                             choices:
 *                               type: array
 *                               items:
 *                                 type: string
 *                             answer:
 *                               type: string
 *                             _id:
 *                               type: string
 *                       content:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       __v:
 *                         type: integer
 */
QuestionBlockRouter.get(
  "/bySubject/:subject",
  QuestionBlockController.getQuestionsBySubject,
);
/**
 * @swagger
 * /api/questionBlock/create:
 *   post:
 *     tags:
 *       - questionBlock
 *     summary: Create a new questionBlock
 *     description:
 *       This is the endpoint for creating a new questionBlock. Values should be passed in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subject:
 *                 type: string
 *               questions:
 *                 type: array
 *                 minItems: 1
 *                 items:
 *                   type: object
 *                   properties:
 *                     text:
 *                       type: string
 *                     choices:
 *                       type: array
 *                       minItems: 4
 *                       items:
 *                         type: string
 *                     answer:
 *                       type: string
 *               content:
 *                 type: string
 *     responses:
 *       '201':
 *         description: QuestionBlock created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 subject:
 *                   type: string
 *                 questions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       text:
 *                         type: string
 *                       choices:
 *                         type: array
 *                         items:
 *                           type: string
 *                       answer:
 *                         type: string
 *               content:
 *                 type: string
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *               __v:
 *                 type: integer
 */
QuestionBlockRouter.post(
  "/create",
  isAdmin,
  uploadImage.single("image"),
  QuestionBlockController.postQuestionBlock,
);
/**
 * @swagger
 * /api/questionBlock/{id}:
 *   put:
 *     tags:
 *       - questionBlock
 *     summary: Update a questionBlock
 *     description:
 *       This is the endpoint for updating a questionBlock. Values should be passed in the request body.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: ID of the specific questionBlock to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subject:
 *                 type: string
 *               questions:
 *                 type: array
 *                 minItems: 1
 *                 items:
 *                   type: object
 *                   properties:
 *                     text:
 *                       type: string
 *                     choices:
 *                       type: array
 *                       minItems: 4
 *                       items:
 *                         type: string
 *                     answer:
 *                       type: string
 *               content:
 *                 type: string
 *     responses:
 *       '200':
 *         description: QuestionBlock updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 subject:
 *                   type: string
 *                 questions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       text:
 *                         type: string
 *                       choices:
 *                         type: array
 *                         items:
 *                           type: string
 *                       answer:
 *                         type: string
 *                 content:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                 __v:
 *                   type: integer
 */
QuestionBlockRouter.put(
  "/:id",
  isAdmin,
  QuestionBlockController.updateQuestionBlock,
);
/**
 * @swagger
 * /api/questionBlock/{id}:
 *   delete:
 *     tags:
 *       - questionBlock
 *     summary: Delete a questionBlock
 *     description:
 *       This is the endpoint for deleting a questionBlock.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: ID of the specific questionBlock to delete
 *     responses:
 *       '200':
 *         description: QuestionBlock deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 subject:
 *                   type: string
 *                 questions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       text:
 *                         type: string
 *                       choices:
 *                         type: array
 *                         items:
 *                           type: string
 *                       answer:
 *                         type: string
 *                 content:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                 __v:
 *                   type: integer
 */
QuestionBlockRouter.delete(
  "/:id",
  isAdmin,
  QuestionBlockController.deleteQuestionBlock,
);
export default QuestionBlockRouter;
