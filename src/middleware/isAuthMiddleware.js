const jwt = require("jsonwebtoken");
const { User } = require("../database/models/userModel");

const isAuthMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No se proporcionó un token" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken.id;

    const user = await User.findByPk(req.userId);
    if (!user || user.roleId !== 2) {
      return res.status(403).json({ message: "Acceso denegado" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};

module.exports = isAuthMiddleware;