const { Router } = require("express");
const router = Router();

const adminRoutes = require("./adminRoutes");
const guestRoutes = require("./guestRoutes");
const authRoutes = require("./authRoutes");

router.use("/admin", adminRoutes);
router.use("/guest", guestRoutes);
router.use("/", authRoutes);

module.exports = router;