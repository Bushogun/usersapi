const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { create, findByEmail, findById } = require("../infraestructure/repositories/UserRepository");

class UserService {
  async register(userData) {
    const hashedPassword = await hash(userData.password, 10);
    userData.password = hashedPassword;
    return await create(userData);
  }

  async login(email, password) {
    const user = await findByEmail(email);
    if (!user) throw new Error("Usuario no encontrado");

    const isMatch = await compare(password, user.password);
    if (!isMatch) throw new Error("Contraseña incorrecta");

    const token = sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return { user, token };
  }

  async getProfile(userId) {
    return await findById(userId);
  }
}

module.exports = new UserService();