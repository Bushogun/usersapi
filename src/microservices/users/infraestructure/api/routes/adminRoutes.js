const { Router } = require("express");
const { listUsers, getUserDetails, updateUser, createUser } = require("../controllers/adminController.js");

const router = Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Get list of users
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *       500:
 *         description: Error retrieving users
 */
router.get("/list-users", listUsers);

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Get user details
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details retrieved successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Error retrieving user details
 */
router.get("/view-user-details/:id", getUserDetails);

/**
 * @openapi
 * /api/users/{id}:
 *   put:
 *     tags:
 *       - Admin
 *     summary: Update user information
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               roleId:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Error updating user
 */
router.put("/update-user/:id", updateUser);

/**
 * @openapi
 * /api/users:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               roleId:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       500:
 *         description: Error creating user
 */
router.post("/create-user", createUser);

module.exports = router;