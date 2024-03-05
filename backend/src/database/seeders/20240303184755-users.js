'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'admin_user',
        email: 'admin@celstore.com',
        password: '$2b$10$m8wtgh9w4grDh9V7FdSjeOMLjm4GbExC9h66URyKV4BO2Lkxi6/ie',
        // admin/@156
        role: 'admin',
      },
      {
        username: 'client_user1',
        email: 'client_1@celstore.com',
        password: '$2b$10$KYwkEuW6.QTF8IQI2iCFv.qNZ0XqUIntMqDFNLptcteINoUIelAz2',
        // 456123
        role: 'client',
      },
      {
        username: 'client_user2',
        email: 'client_2@celstore.com',
        password: '$2b$10$Er.0DOLc2F7BRpuDGTBq0.jDJXtIkb/fJQYoX7URsbd4xZUusfpRe',
        // 789456
        role: 'client',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};

