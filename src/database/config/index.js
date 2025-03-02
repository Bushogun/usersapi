const sequelize = require('./database');
const User = require('../models/userModel'); 
const Role = require('../models/roleModel');
const Permission = require('../models/permissionModel');
const RolePermission = require('../models/rolePermissionModel');

User.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });
Role.belongsToMany(Permission, { through: RolePermission, foreignKey: 'roleId', as: 'permissions' });
Permission.belongsToMany(Role, { through: RolePermission, foreignKey: 'permissionId', as: 'roles' });

sequelize.sync({ force: true }) 
  .then(() => console.log('✅ Base de datos sincronizada'))
  .catch(err => console.error('❌ Error al sincronizar la base de datos:', err));

module.exports = sequelize;
