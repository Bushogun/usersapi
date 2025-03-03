const Permission = require("../../../../database/models/permissionModel");

class PermissionRepository {
  async create(permissionData) {
    return await Permission.create(permissionData);
  }

  async findByName(name) {
    return await Permission.findOne({ where: { name } });
  }

  async findById(id) {
    return await Permission.findByPk(id);
  }

  async findAll() {
    return await Permission.findAll();
  }
}

module.exports = new PermissionRepository();