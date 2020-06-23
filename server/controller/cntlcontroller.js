const controllers = {};

var sequelize = require('../model/database');
var DataTest = require('../model/datatest');

sequelize.sync();

controllers.select = async (req, res) => {
  const data = await DataTest.findAll()
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  })
  res.json({success:true, data:data});
}

controllers.insert = async (req,res) => {

    const { firstname, lastname, email, phone, language, country, billingaddress1, billingaddress2, billingcity, billingregion, billingzip,
    shippingaddress1, shippingaddress2, shippingcity, shippingregion, shippingzip, trackers } = req.body;

    const data = await DataTest.create({
      ds_firstname:  firstname,
      ds_lastname:  lastname,
      ds_email: email,
      nr_phone: phone,
      ds_language: language,
      ds_country: country,
      ds_billingone: billingaddress1,
      ds_billingtwo: billingaddress2,
      ds_billingcity: billingcity,
      ds_billingregion: billingregion,
      nr_billingzip: billingzip,
      ds_shippingone: shippingaddress1,
      ds_shippingtwo: shippingaddress2,
      ds_shippingcity: shippingcity,
      ds_shippingregion: shippingregion,
      nr_shippingzip: shippingzip,
      qt_trackers: trackers
    })
    .then(function(data){
      return data;
    })
    .catch(error =>{
      console.log("Erro "+error)
      return error;
    })

    res.status(200).json({
      success: true,
      message:"Dados inseridos",
      data: data
    });
  }

module.exports = controllers;