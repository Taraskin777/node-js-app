const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '17101980', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
