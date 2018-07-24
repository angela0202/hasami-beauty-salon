const express = require('express');
const mongoose = require('mongoose');
const { join } = require('path');
const Controller = require('../controllers/index.js')
const NewsSchema = require('../models/index.js');
const SubscribeSchema = require('../models/subscribe.js');

let today = new Date();
let day = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let date = `${day}/${month}/${year}`

module.exports = {
	model_save: function (req, res, next) {
		let news = new NewsSchema({
			startday: req.body.day,
    	topnews: req.body.topnews,
    	title: req.body.title,
    	image: req.body.image,
    	deadline: req.body.deadline
		});
		news.save(function (err) {
			if(err) throw err;
		})
	},
	models_find: function (req, res, next) {
		NewsSchema
		.find({})
			.then((data) => res.send(data))
			.catch((err) => console.log(err));
	},
	models_delete: function (req, res, next) {
		NewsSchema
		.remove({})
			.then((data) => res.send(data))
			.catch((err) => console.log(err));
	},
	subscrib_save: function (req, res, next) {
		res.status(200)
		let user = new SubscribeSchema({
			email: req.body.emails,
		});
		user.save(function (err) {
			if(err) throw err;
		})
	},
	subscrib_find :function (req, res, next) {
		SubscribeSchema
		.find({})
			.then((data) => res.send(data))
			.catch((err) => console.log(err));
	},

	subscrib_delete: function (req, res, next) {
		SubscribeSchema
		.remove({})
			.then((data) => res.send(data))
			.catch((err) => console.log(err));
	},

	mailsend: function (req, res, next) {
		NewsSchema
		.find({})
			.then((data) => {
				data.forEach((element) => {
					if ( date === element.startday) {
						SubscribeSchema
						.find({})
							.then((date) => {
								date.forEach((elem) => {
								let controller = new Controller();
								controller.nodemailer(elem.email, element.title, element.topnews )
							})	
				})
			.catch((err) => console.log(err));
				  }
			})
		})
		.catch((err) => console.log(err));
	}
}