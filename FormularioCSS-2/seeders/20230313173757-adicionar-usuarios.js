'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'John Doe' },
      { nome: 'Mariana' },
      { nome: 'Maylla' },
      { nome: 'Gabriela' },
      { nome: 'Cordélia' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};

/**
 up serve para colocar os dados no banco de dados 

 down serve p/ pegar os dados que vc colocou no banco de dados e apaga tudo
 */