const User  = require("../../../../database/models/userModel");

class UserRepository {
  async create(userData) {
    return await User.create(userData);
  }

  async findByEmail(email) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Recuerda llenar la base de datos con el comando: npx sequelize db:seed:all --env development");
    }
    return user;
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findAll() {
    return await User.findAll();
  }

  async update(id, userData) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    await user.update(userData);
    return user;
  }

  async delete(id) {
    return await User.destroy({ where: { id } });
  }
}

module.exports = new UserRepository();
