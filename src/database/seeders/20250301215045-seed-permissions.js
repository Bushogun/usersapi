'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {  
    await queryInterface.bulkInsert('Permissions', [
      { id: 1, name: 'VIEW_PROFILE', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'UPDATE_PROFILE', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'CHANGE_PASSWORD', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'LOGIN', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'LOGOUT', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'LIST_USERS', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'VIEW_USER_DETAILS', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'UPDATE_USER', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'CREATE_USER_ROLE', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
