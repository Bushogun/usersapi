'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const hashedPassword = await bcrypt.hash('password123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        email: 'admin@example.com',
        password: hashedPassword,
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'guest@example.com',
        password: hashedPassword,
        firstName: 'Guest',
        lastName: 'User',
        role: 'guest',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
