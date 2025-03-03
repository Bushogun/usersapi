const  Role  = require("../../../../database/models/roleModel");

class RoleRepository {
  async create(roleData) {
    return await Role.create(roleData);
  }

  async findByName(name) {
    return await Role.findOne({ where: { name } });
  }

  async findById(id) {
    return await Role.findByPk(id);
  }

  async findAll() {
    return await Role.findAll();
  }
}

module.exports = new RoleRepository();