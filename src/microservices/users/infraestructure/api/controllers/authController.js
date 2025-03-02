const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../../../../../database/models/userModel.js');

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, name });
    res.status(201).json({ message: "Usuario registrado", user });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar usuario", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión", error });
  }
};

const logout = (req, res) => {
  // Aquí puedes invalidar el token si es necesario
  res.json({ message: "Sesión cerrada" });
};

module.exports = { register, login, logout };