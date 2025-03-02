const { Router } = require('express');
const { login } = require('../controllers/userController.js');

const router = Router();

/**
 * @openapi
 * /api/users/login:
 *   post:
 *     tags:
 *       - Users
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email: admin@example.com
 *                 type: string
 *               password: password123
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 *       404:
 *         description: User not found
 *       500:
 *         description: Error logging in user
 */
router.post('/login', login);

/**
 * @openapi
 * /api/login:
 *   post:
 *     tags:
 *       - Users
 *     summary: Logout a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email: admin@example.com
 *                 type: string
 *               password: password123
 *                 type: string
 *     responses:
 *       200:
 *         description: User Logout in successfully
 *       401:
 *         description: Bad Request
 *       404:
 *         description: Bad Request
 *       500:
 *         description: Error logging in user
 */
router.post('logout', logout);

module.exports = router;