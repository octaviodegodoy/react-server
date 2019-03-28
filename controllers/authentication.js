const User = require('../models/user');

exports.signup = function(req, res, next) {
    
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(422).send({ error: " You should provide email and password !!! "});
    }

    User.findOne({ email: email}, function(err, existingUser) {

        if(err){return next(err);}
         // If an user with the same email exists, return an error

        if(existingUser) {
            return res.status(422).send({error: 'Email in use '});
        }

           
    // If a user with email does NOT exist, create and save user record

    const user = new User({
        email: email,
        password: password
    });

    user.save(function (err){
        if(err) { return next(err); }

        res.json({ success: true });
    });
    // Respond to request saying the user was created

    

    });

    


}