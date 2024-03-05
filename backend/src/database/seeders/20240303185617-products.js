'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Xiaomi Redmi 9',
        brand: 'Xiaomi',
        model: 'Redmi 9',
        price: 10000,
        color: 'red',
      },
      {
        name: 'iPhone 14 Pro',
        brand: 'iPhone',
        model: '14 Pro',
        price: 30000,
        color: 'silver',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
};
