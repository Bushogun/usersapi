const AdminService = require("../../../../users/application/AdminService");

class AdminController {
  async getAllUsers(req, res, isAdminMiddleware) {
    try {
      const users = await AdminService.getAllUsers(isAdminMiddleware);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserDetails(req, res, isAdminMiddleware) {
    try {
      const { userId } = req.params;
      const user = await AdminService.getUserDetails(userId, isAdminMiddleware);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async updateUser(req, res, isAdminMiddleware) {
    try {
      const { userId } = req.params;
      const userData = req.body;
      const updatedUser = await AdminService.updateUser(userId, userData, isAdminMiddleware);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { userId } = req.params;
      await AdminService.deleteUser(userId);
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async assignPermissionToRole(req, res) {
    try {
      const { roleId, permissionId } = req.body;
      const result = await AdminService.assignPermissionToRole(roleId, permissionId);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AdminController();