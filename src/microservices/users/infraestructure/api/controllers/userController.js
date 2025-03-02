const { hash, compare } = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../../../../database/models/userModel.js');

const { sign } = jwt;

const viewProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findByPk(userId, { attributes: { exclude: ['password'] } });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el perfil del usuario', error: error.message });
  }
};
    const updateProfile = async (req, res) => {
      try {
        const userId = req.user.id; 
        const { firstName, lastName, email } = req.body;
    
        const user = await User.findByPk(userId);
        if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email;
    
        await user.save();
    
        res.status(200).json({ message: 'Perfil actualizado correctamente', user });
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el perfil', error: error.message });
      }
    };

    const changePassword = async (req, res) => {
      try {
        const userId = req.user.id; 
        const { currentPassword, newPassword } = req.body;
    
        const user = await User.findByPk(userId);
        if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    
        const isValidPassword = await compare(currentPassword, user.password);
        if (!isValidPassword) {
          return res.status(401).json({ message: 'Contraseña actual incorrecta' });
        }
    
        const hashedPassword = await hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
    
        res.status(200).json({ message: 'Contraseña cambiada correctamente' });
      } catch (error) {
        res.status(500).json({ message: 'Error al cambiar la contraseña', error: error.message });
      }
    };
    module.exports = { viewProfile, updateProfile, changePassword };  