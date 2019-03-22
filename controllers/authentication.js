const User = require('../models/user');

exports.signup = function(req, res, next) {
    
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email}, function(err, existingUser) {

    });

    // See if the user with the given email exists

    // If an user with the same email exists, return an error

    // If a user with email does NOT exist, create and save user record

    // Respond to request saying the user was created
}