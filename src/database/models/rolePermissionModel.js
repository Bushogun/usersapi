const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Role = require('./roleModel.js');
const Permission = require('./permissionModel.js');

const RolePermission = sequelize.define('RolePermission', {
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: 'id',
    },
    primaryKey: true,
  },
  permissionId: {
    type: DataTypes.INTEGER,
    references: {
      model: Permission,
      key: 'id',
    },
    primaryKey: true,
  },
}, {
  timestamps: false,
  tableName: 'RolePermissions',
});


module.exports = RolePermission;