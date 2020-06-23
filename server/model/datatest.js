const Sequelize = require('sequelize');
var sequelize = require('./database');

var tb = 'tb_cadastros';

var DataTest = sequelize.define(tb,{
  cd_shipping:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  ds_firstname:  Sequelize.STRING,
  ds_lastname:  Sequelize.STRING,
  ds_email: Sequelize.STRING,
  nr_phone: Sequelize.STRING,
  ds_language: Sequelize.STRING,
  ds_country: Sequelize.STRING,
  ds_billingone: Sequelize.STRING,
  ds_billingtwo: Sequelize.STRING,
  ds_billingcity: Sequelize.STRING,
  ds_billingregion: Sequelize.STRING,
  nr_billingzip: Sequelize.STRING,
  ds_shippingone: Sequelize.STRING,
  ds_shippingtwo: Sequelize.STRING,
  ds_shippingcity: Sequelize.STRING,
  ds_shippingregion: Sequelize.STRING,
  nr_shippingzip: Sequelize.STRING,
  qt_trackers: Sequelize.INTEGER
});

module.exports = DataTest;