const User = require('mongoose').model('User');

module.exports.register = function(req, res){
        User.create(req.body)
        .then(function(user){
            login(req, res, user);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    }
module.exports.login = function(req, res){
        User.findOne({username: req.body.username})
        .then(function(user){
            User.verifyPassword(req.body.password, user.password)
                .then(function(matched) {
                    if(!matched){throw new Error('username/password combo invalid')};
                    login(req,res,user)
                })
                .catch(function(err){
                    res.status(422).json(err)
                })
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    }
module.exports.logout = function(req, res){
    req.session.destroy();
    res.clearCookie('userID');
    res.clearCookie('expiration');
    res.json(true);
}


function login(request, response, user) {
  request.session.user = user.toObject();
  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);

  response.json(user);
}
