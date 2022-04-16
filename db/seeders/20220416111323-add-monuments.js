'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Monuments',
      [
        {
          name: 'Petra',
          country: 'Jordan',
          city: 'Maan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Eiffel Tower',
          country: 'France',
          city: 'Paris',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Brandenburg Gate',
          country: 'Germany',
          city: 'Berlin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Monuments', {
      [Op.or]: [
        { name: 'Petra' },
        { name: 'Eiffel Tower' },
        { name: 'Brandenburg Gate' },
      ],
    });
  },
};
