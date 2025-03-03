const { Router } = require("express");
const isAdminMiddleware = require('../../../../../middleware/isAdmin');
const { getAllUsers, getUserDetails, updateUser } = require("../controllers/AdminController.js");

const router = Router();

/**
 * @openapi
 * /api/admin/list-users:
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
router.get("/list-users", getAllUsers, isAdminMiddleware);

/**
 * @openapi
 * /api/admin/view-user-details/{id}:
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
router.get("/view-user-details/:id", getUserDetails, isAdminMiddleware);

/**
 * @openapi
 * /api/admin/update-user/{id}:
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               firstName:
 *                 type: string 
 *               lastName:
 *                 type: string
 *               roleId:
 *                 type: number
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Error updating user
 */
router.put("/update-user/:userId", updateUser, isAdminMiddleware);

module.exports = router;