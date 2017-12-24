//load bcrypt
var bCrypt = require('bcrypt-nodejs');

var userIdRetrnVar = {};


module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    //serialize
    passport.serializeUser(function(user, done) {
        done(null, user.id);

    });

    // deserialize user which saves user id to session
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {           
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        //hashed password generating function inside the callback function
        function(req, email, password, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            //ensuring username isn't already taken 
            User.findOne({
                where: {
                    email : email
                }
            }).then(function(user) {
                if (user)
                {
                    return done(null, false, {
                        message: 'That e-mail is already registered.'
                    });
                } 
                else {
                    var userPassword = generateHash(password);
                    var data =
                        {
                            email: email,
                            password: userPassword
                        };
                    
                  // Sequelize method for adding new entries to the database
                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
        {
            // by default, local strategy uses username and password
            usernameField: 'email', 
            passwordField: 'password', 
            passReqToCallback: true // allows us to pass back the entire request to the callback 
        },
        function(req, email, password, done) {
            var User = user;           
            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }
            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {

                if (!user) {
                    return done(null, false, {
                        message: 'E-mail does not exist.'
                    });
                }
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Invalid password.'
                    });
                }
                var userinfo = user.get();
                return done(null, userinfo);

            }).catch(function(err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'Something went wrong with your Sign-in.'
                });
            });
        }
    ));
};


