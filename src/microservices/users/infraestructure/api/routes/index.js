const { Router } = require("express");
const authMiddleware = require("../../../../../middleware/authMiddleware");
const router = Router();

const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

// Rutas de administrador (requiere autenticación y rol de admin)
router.use("/admin", authMiddleware, adminRoutes);

// Rutas de usuario (requiere autenticación, pero no es necesario ser admin)
router.use("/user", authMiddleware, userRoutes);

// Rutas de autenticación públicas (login, registro, etc.)
router.use("/", authRoutes);

module.exports = router;