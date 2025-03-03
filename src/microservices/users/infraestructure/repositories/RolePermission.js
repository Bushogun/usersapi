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
}

module.exports = new RolePermissionRepository();