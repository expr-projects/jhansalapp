var express = require('express');
var router = express.Router();
var index = require('../routes/index');
  router.get('/', isLoggedIn, function(req, res){
    res.render('new.ejs', { user: req.user });
  });

module.exports =router;
  function isLoggedIn(req, res, next) {
  	if(req.isAuthenticated()){
  		return next();
  	}

  	res.redirect('/login');
  }
