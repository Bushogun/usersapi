const { Router } = require('express');
const { updateProfile, changePassword } = require('../controllers/AuthController.js');
const { getUserDetails } = require('../controllers/AdminController.js');

const router = Router();

/**
 * @openapi
 * /api/users/view-profile:
 *   get:
 *     tags:
 *       - Users
 *     summary: View user profile
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
router.get('/view-profile', getUserDetails);

/**
 * @openapi
 * /api/users/update-profile:
 *   put:
 *     tags:
 *       - Users
 *     summary: Update user profile
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
router.put('/update-profile', updateProfile);

/**
 * @openapi
 * /api/users/change-password:
 *   get:
 *     tags:
 *       - Users
 *     summary: Change user password
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
router.put('/change-password', changePassword);

module.exports = router;