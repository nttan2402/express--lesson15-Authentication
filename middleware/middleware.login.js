var db = require("../db");

module.exports.requireAuth = function(req, res, next) {

	if(!req.cookies.userId) { //if cookie false --> back user to login page (not user)
		//with cookie, user can login users page.
		res.redirect("/login");
		return;
	}
	//if they have a cookie, check cookie in database (except for fake cookie)
	var user = db.get("users").find({ id: req.cookies.userId}).value();
	
	if(!user) { //if fake cookie redirect to login page
		res.redirect("/login");
		return;
	}
	//real cookie


	next();//if real cookie next to user route
}