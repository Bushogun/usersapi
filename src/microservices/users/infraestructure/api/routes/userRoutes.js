const { Router } = require('express');
const { register } = require('../controllers/userController.js');

const router = Router();
/**
 * @openapi
 * /api/users/register:
 *   post:
 *     tags:
 *       - Users
 *     summary: Register a new user
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
 *     responses:
 *       201:
 *         description: User created successfully
 *       500:
 *         description: Error registering user
 */
router.post('/register', register);


// router.get('/profile', login);
// router.put('/edit-profile', login);
// router.put('/edit-password', login);
// router.delete('/logout', login);

module.exports = router;
