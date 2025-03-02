const { Router } = require("express")

const router = Router();

const adminRoutes = require("./adminRoutes")
const guestRoutes = require("./guestRoutes")
const authRoutes = require("./authRoutes")

const rutas_init = () => { 
const router = Router()
router.use("/admin", adminRoutes) 
router.use("/guest", guestRoutes)
router.use("/", authRoutes)
  
return router 
};

module.exports = { rutas_init }