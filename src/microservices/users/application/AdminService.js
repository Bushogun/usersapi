const UserRepository = require("../infraestructure/repositories/UserRepository");
const RolePermissionRepository = require("../infraestructure/repositories/RolePermissionRepository"); 
const { hash } = require("bcryptjs");

class AdminService {
  async getAllUsers(isAdminMiddleware) {
    if (isAdminMiddleware) {
    return await UserRepository.findAll();
    }else{
      throw new Error("No tienes permisos para acceder a esta información");
    }
    }

  async getUserDetails(userId, isAdminMiddleware) {
    if (isAdminMiddleware) {
    const user = await UserRepository.findById(userId);
      if (!user) throw new Error("Usuario no encontrado");
    return user;
    }else{
      throw new Error("No tienes permisos para acceder a esta información");
    }
  }

  async updateUser(userId, userData, isAdminMiddleware) {
    if (!isAdminMiddleware) {
      throw new Error("No tienes permisos ejecutar esta acción");
    }
    if (userData.password) {
      userData.password = await hash(userData.password, 10); 
    }
    const updatedUser = await UserRepository.update(userId, userData);
    if (!updatedUser) throw new Error("Error al actualizar el usuario");
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

module.exports = new AdminService();