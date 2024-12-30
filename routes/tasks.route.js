import { Router } from "express";
import { getTasks, getTask, postTask, putTask, deleteTask } from "../controllers/tasks.controller.js";
import { body } from "express-validator";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         title:
 *           type: string
 *           description: Task's title
 *         description:
 *           type: string
 *           description: The description of the task
 *         completed:
 *           type: boolean
 *           description: Show if this is completed or not
 *         createdAt:
 *           type: string
 *           format: date
 *           description: Creation date of the task
 *       example:
 *         title: 'Create App'
 *         description: You have to make the app
 *         completed: false
 *         createdAt: 2024-12-30
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The Tasks managing API
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Returns the list of all the Tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of the Tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */


router.get('/tasks', getTasks);

/**
 * @swagger
 * /api/tasks/:id:
 *   get:
 *     summary: Returns an specified Task
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Just one Task
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */


router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new Task
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Create a new Task
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */

router.post('/tasks', body('title').notEmpty().withMessage('Title empty') , postTask);

/**
 * @swagger
 * /api/tasks/:id :
 *   put:
 *     summary: Update an specified task
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: You can update a task by passing its respective props(title, description, completed)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */


router.put('/tasks/:id', putTask);

/**
 * @swagger
 * /api/tasks:
 *   delete:
 *     summary: Delete an specified Task
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: You can delete a Task 
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */


router.delete('/tasks/:id', deleteTask)

 

export default router