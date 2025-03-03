const sequelize = require('../config/database');
const User = require('./userModel'); 
const Role = require('./roleModel');
const Permission = require('./permissionModel');
const RolePermission = require('./rolePermissionModel');

User.belongsTo(Role, { foreignKey: 'roleId', as: 'userRole' });
Role.belongsToMany(Permission, { through: RolePermission, foreignKey: 'roleId', as: 'permissions' });
Permission.belongsToMany(Role, { through: RolePermission, foreignKey: 'permissionId', as: 'roles' });

sequelize.sync({ force: true }) 
  .then(() => console.log('✅ Base de datos sincronizada'))
  .catch(err => console.error('❌ Error al sincronizar la base de datos:', err));

module.exports = sequelize;
