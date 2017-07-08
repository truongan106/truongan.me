var express = require('express');

var index = {
	home: function(req, res, next) {
		res.render('index', {
			title: 'Dương Trường An - truongan.me',

		});
	}

}

module.exports = index;