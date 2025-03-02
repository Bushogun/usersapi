const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.ENUM('Admin', 'Guest'),
    unique: true,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'Roles',
});

module.exports = Role;
