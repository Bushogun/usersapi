const { User } = require("../database/models/userModel");

const isAdminMiddleware = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  if (!user || user.roleId !== 1) {
    return res.status(403).json({ message: "Acceso denegado" });
  }
  next();
};

module.exports = isAdminMiddleware;