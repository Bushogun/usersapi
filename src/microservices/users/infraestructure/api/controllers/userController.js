const { hash, compare } = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../../../../database/models/userModel.js');

const { sign } = jwt;

const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, firstName, lastName });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    const token = sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};

module.exports = { register, login };