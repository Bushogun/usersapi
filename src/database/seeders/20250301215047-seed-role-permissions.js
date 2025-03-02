'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('RolePermissions', [
      // Permisos para Guest
      { roleId: 2, permissionId: 1 }, // VIEW_PROFILE
      { roleId: 2, permissionId: 2 }, // UPDATE_PROFILE
      { roleId: 2, permissionId: 3 }, // CHANGE_PASSWORD
      { roleId: 2, permissionId: 4 }, // LOGIN
      { roleId: 2, permissionId: 5 }, // LOGOUT
      { roleId: 2, permissionId: 10 }, // CREATE_USER_GUEST

      // Permisos para Admin
      { roleId: 1, permissionId: 4 }, // LOGIN
      { roleId: 1, permissionId: 5 }, // LOGOUT
      { roleId: 1, permissionId: 6 }, // LIST_USERS
      { roleId: 1, permissionId: 7 }, // VIEW_USER_DETAILS
      { roleId: 1, permissionId: 8 }, // UPDATE_USER
      { roleId: 1, permissionId: 9 }, // CREATE_USER
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('RolePermissions', null, {});
  }
};
