const AuthService = require("../../../../users/application/AuthService");

class AuthController {
  async register(req, res, isAdminMiddleware) {
    try {
      const user = await AuthService.register(req.body, isAdminMiddleware);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async getProfile(req, res) {
    try {
      const { userId } = req.params;
      const user = await AuthService.getProfile(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async updateProfile(req, res) {
    try {
      const { userId } = req.params;
      const userData = req.body;
      const updatedUser = await AuthService.updateProfile(userId, userData);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async changePassword(req, res) {
    try {
      const { userId } = req.params;
      const { newPassword } = req.body;
      await AuthService.changePassword(userId, newPassword);
      res.status(200).json({ message: "Contraseña actualizada correctamente" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();