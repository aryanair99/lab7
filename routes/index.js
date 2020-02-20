var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.viewAlt = function(req, res){
 	projects["viewAlt"] = false;
 	res.render('index', projects);
};

exports.view = function(request, response){
  	response.render('index', projects);
};