const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const UserRepository = require("../infraestructure/repositories/UserRepository");
const RoleRepository = require("../infraestructure/repositories/RoleRepository");

class AuthService {
  async register(userData, isAdminMiddleware) {
    const hashedPassword = await hash(userData.password, 10);
    if (isAdminMiddleware) {
      const defaultRole = await RoleRepository.findByName("Admin");
      if (!defaultRole) throw new Error("Rol Admin no encontrado");
      const user = await UserRepository.create({ ...userData, password: hashedPassword, roleId: defaultRole.id });
    return user;
    }else{
    const defaultRole = await RoleRepository.findByName("Guest");
    if (!defaultRole) throw new Error("Rol Guest no encontrado");
    const user = await UserRepository.create({ ...userData, password: hashedPassword, roleId: defaultRole.id });
    return user;
  }
}

  async login(email, password) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error("Usuario no encontrado");

    const isMatch = await compare(password, user.password);
    if (!isMatch) throw new Error("Contraseña incorrecta");

    const token = sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return { user, token };
  }

  async getProfile(userId) {
    const user = await UserRepository.findById(userId);
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  }

  async updateProfile(userId, userData) {
    if (userData.password) {
      userData.password = await hash(userData.password, 10); 
    }
    const updatedUser = await UserRepository.update(userId, userData);
    if (!updatedUser) throw new Error("Error al actualizar el perfil");
    return updatedUser;
  }

  async changePassword(userId, newPassword) {
    const hashedPassword = await hash(newPassword, 10);
    const updatedUser = await UserRepository.update(userId, { password: hashedPassword });
    if (!updatedUser) throw new Error("Error al cambiar la contraseña");
    return updatedUser;
  }
}

module.exports = new AuthService();