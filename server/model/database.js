var Sequelize = require('sequelize');

const sequelize = new Sequelize(
 'db_cntl',
  'root',
  'root',
  {
    host: 'db',
    dialect: 'mysql',
    define: {
      timestamps: false }
  }
);

module.exports = sequelize;