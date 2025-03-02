const User = require('../../../../../database/models/userModel.js');
const Role = require('../../../../../database/models/roleModel.js');


const listUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: Role });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al listar usuarios", error });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { include: Role });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener detalles del usuario", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, roleId } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.roleId = roleId || user.roleId;
    await user.save();
    res.json({ message: "Usuario actualizado", user });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar usuario", error });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, roleId } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, roleId });
    res.status(201).json({ message: "Usuario creado", user });
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario", error });
  }
};

module.exports = { listUsers, getUserDetails, updateUser, createUser };