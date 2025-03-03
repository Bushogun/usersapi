const UserService = require("../../../../users/application/UserService");

class UserController {
  async getDetails(req, res, AuthMiddleware) {
    try {
      const users = await UserService.getDetails(req, AuthMiddleware);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateSelf(req, res, AuthMiddleware) {
    try {
      const userData = req.body;
      const updatedUser = await UserService.updateUser(req, userData, AuthMiddleware);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async changePassword(req, res, AuthMiddleware) {
    try {
      const userData = req.body;
      const updatedUser = await UserService.updatePassword(req, userData, AuthMiddleware);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async assignPermissionToRole(req, res) {
    try {
      const { roleId, permissionId } = req.body;
      const result = await UserService.assignPermissionToRole(roleId, permissionId);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UserController();