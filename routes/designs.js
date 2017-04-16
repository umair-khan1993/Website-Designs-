"use strict";

var db = require("../database-config.js"),
	designModel = db.designModel;

exports.fetchDesigns = function(req, res) {
	console.log("req received")
	var fetchDesigns = designModel.findAll();

  fetchDesigns.complete(function(err, designs) {
    if (err) {
      console.log("error in fetching designs")
      console.log(err)
      res.send(500)

    } else {
			res.status(200).send(designs)
    }
  });
}

exports.addWebsiteDesign = function(req, res) {
	var designAttributes = req.body.data;

	designModel.create({
    title: designAttributes.title,
    subject_url: designAttributes.subject_url ? designAttributes.subject_url : null,
    body: designAttributes.body
  }).complete(function(err, design) {
    if (err) {
      console.log("error occured while storing design");
      console.log(err)
      res.send(500)
    } else {
      console.log("design stored successfully");
      res.send(200);
    }
  });
}