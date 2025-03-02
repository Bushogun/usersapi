const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./roleModel.js');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'id',
    },
  },
}, {
  timestamps: true,
  tableName: 'Users',
});

User.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });
module.exports = User;