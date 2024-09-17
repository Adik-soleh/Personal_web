'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('blogs', [
      {
        title: 'PROJECT | 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quibusdam labore porro iure optio. Nisi facilis impedit quidem',
        image: 'https://images5.alphacoders.com/413/413842.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('blogs', null, {});
  },
};