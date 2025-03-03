const { Router } = require('express');
const isAuthMiddleware = require('../../../../../middleware/isAuthMiddleware.js');
const { getDetails, updateSelf, changePassword } = require('../controllers/UserController.js');

const router = Router();

/**
 * @openapi
 * /api/user/view-profile:
 *   get:
 *     tags:
 *       - User
 *     summary: View self profile
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Error retrieving user profile
 */
router.get('/view-profile', getDetails, isAuthMiddleware);

/**
 * @openapi
 * /api/user/update-profile:
 *   put:
 *     tags:
 *       - User
 *     summary: Update user profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Error updating user profile
 */
router.put('/update-profile', updateSelf, isAuthMiddleware);

/**
 * @openapi
 * /api/user/change-password:
 *   get:
 *     tags:
 *       - User
 *     summary: Change user password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Error changing password
 */
router.put('/change-password', changePassword, isAuthMiddleware);

module.exports = router;