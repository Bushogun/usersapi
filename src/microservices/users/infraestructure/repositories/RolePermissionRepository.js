const RolePermission = require("../../../../database/models/rolePermissionModel");

class RolePermissionRepository {
  async create(roleId, permissionId) {
    return await RolePermission.create({ roleId, permissionId });
  }

  async findByRoleId(roleId) {
    return await RolePermission.findAll({ where: { roleId } });
  }

  async findByPermissionId(permissionId) {
    return await RolePermission.findAll({ where: { permissionId } });
  }

  async createBulk(roleId, permissionIds) {
    const rolePermissions = permissionIds.map((permissionId) => {
      return { roleId, permissionId };
    });
    return await RolePermission.bulkCreate(rolePermissions);
  }
}

module.exports = new RolePermissionRepository();