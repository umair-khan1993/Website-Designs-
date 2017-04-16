"use strict";
var Sequelize = require('sequelize'),
  sequelize = new Sequelize('websitedesigns', 'root', "", {
    dialect: "mysql",
    // or 'sqlite', 'postgres', 'mariadb'
    host: 'localhost',
    port: 3306, // or 5432 (for postgres)
    logging: false
  })

sequelize
  .authenticate()
  .then(function() {
    console.log('Connection to SQL DB has been established successfully.')
  })
  .catch(function(err) {
    console.log(err);
    console.log("SOMETHING DONE GOOFED");
  })
  .done();

var WEBDESIGN = sequelize.define('web_design', {
  design_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  title: {
    type: Sequelize.STRING,
  },

  body:{
    type: Sequelize.TEXT,
  },

  subject_url:{
    type: Sequelize.STRING,
  },

  /*createdOn: {
    type: Sequelize.DATE
  }*/
}, {
  tableName: 'web_design', // this will define the table's name
  timestamps: true // this will deactivate the timestamp columns

});

sequelize
  .sync({
    force: false
  })
  .then(function() {
    console.log('It worked fine!')
  })
  .catch(function(err) {
    console.log("Error in syncing", err);
  })
  .done();

exports.designModel = WEBDESIGN;
exports.sequelize = sequelize;