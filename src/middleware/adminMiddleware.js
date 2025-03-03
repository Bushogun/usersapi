module.exports = (req, res, next) => {
    if (!req.user || req.user.role !== "Admin") {
      return res.status(403).json({ message: "Acceso denegado. Solo administradores pueden acceder." });
    }
    next();
  };