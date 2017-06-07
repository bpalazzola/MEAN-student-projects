const User = require('../models/user');

module.exports = {
    create(req, res){
        User.create(req.body, function(err, user){
            if(err){
                return res.status(422).json(err)
            }
            res.json(user);
        })
    },
    login(req, res){
        User.findOne({username: req.body.username})
            .then(function(user){
                if(!user){throw new Error({error: 'Invalid username/password combination.'})}
                return User.verifyPassword(req.body.password, user.password)
                    .then(function(){
                        login_user(req, res, user);
                    })
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    logout(req, res){
        req.session.destroy();
        res.clearCookie('UserID');
        res.clearCookie('expiration');
        res.json(true);
    },
    delete(req, res){
        User.findByIdAndDelete(req.params.id)
            .then(function(user){
                res.json(user);
            })
            .catch(function(err){
                res.json(err);
            })
    },
    update(req, res){
        User.findByIdAndUpdate(req.params.id, req.body)
            .then(function(user){
                res.json(user);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    }
}

function login_user(req, res, user){
    req.session.user = user.toObject();
    delete req.session.user.password;
    res.cookie('userID', user._id.toString());
    res.cookie('expiration', Date.now() + 86400 * 1000);
    res.cookie('username', user.username);
    res.json(true);
}
