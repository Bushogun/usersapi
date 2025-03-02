const { Router } = require("express");
const router = Router();

const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

/**
 * @openapi
 * /api/admin:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Admin routes
 *     responses:
 *       200:
 *         description: Admin routes
 */
router.use("/admin", adminRoutes);

/**
 * @openapi
 * /api/user:
 *   get:
 *     tags:
 *       - Users
 *     summary: User routes
 *     responses:
 *       200:
 *         description: User routes
 */
router.use("/user", userRoutes);

/**
 * @openapi
 * /api:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Auth routes
 *     responses:
 *       200:
 *         description: Auth routes
 */
router.use("/", authRoutes);

module.exports = router;