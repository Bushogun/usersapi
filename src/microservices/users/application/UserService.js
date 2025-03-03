const UserRepository = require("../infraestructure/repositories/UserRepository");
const RolePermissionRepository = require("../infraestructure/repositories/RolePermissionRepository"); 
const { hash } = require("bcryptjs");

class UserService {
    async getDetails(req, AuthMiddleware ) {
        if (AuthMiddleware) {
        return await UserRepository.findById(req.user.id);
        }else{
          throw new Error("No tienes permisos para acceder a esta información");
        }
    }

  async updateUser(req, userData, AuthMiddleware) {
    if (!AuthMiddleware) {
      throw new Error("No tienes permisos ejecutar esta acción");
    }
    const allowedFields = ['firstName', 'lastName'];
    const filteredData = {};
    for (const field of allowedFields) {
      if (userData[field] !== undefined) {
        filteredData[field] = userData[field];
      }
    }

    const updatedUser = await UserRepository.update(req.user.id, filteredData);
    if (!updatedUser) throw new Error("Error al actualizar el usuario");
    return updatedUser;
  }

  async updatePassword(req, AuthMiddleware) {
    if (!AuthMiddleware) {
      throw new Error("No tienes permisos ejecutar esta acción");
    }
    const newPassword = req.body.password; 
    const hashedPassword = await hash(newPassword, 10);
    const updatedUser = await UserRepository.update(req.user.id, { password: hashedPassword });
    if (!updatedUser) throw new Error("Error al cambiar la contraseña");
    return updatedUser;
  }

  async deleteUser(userId) {
    const deletedUser = await UserRepository.delete(userId);
    if (!deletedUser) throw new Error("Error al eliminar el usuario");
    return deletedUser;
  }

  async assignPermissionToRole(roleId, permissionId) {
    return await RolePermissionRepository.create(roleId, permissionId);
  }
}

module.exports = new UserService();