const Message = require('mongoose').model('Message');
const User = require('mongoose').model('User');

module.exports = {
    index(req, res){
        Message.find({}).populate({
            path: '_comments',
            populate: {
                path: '_user',
                model: 'User'
            }
        }).populate('_user')
            .then(function(messages){
                res.json(messages);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    show(req, res){
        Message.findById(req.params.id).populate({
            path: '_comments',
            populate: {
                path: '_user',
                model: 'User'
            }
        }).populate('_user')
            .then(function(message){
                res.json(message);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    create(req, res){
        Message.create(req.body)
            .then(function(message){
                User.findById(message._user.toString())
                    .then(function(user) {
                        if(!user) throw new Error('user not found!');
                        user._messages.push(message);
                        return user.save()
                            .then(function(){
                                res.json(message)
                            })
                    })
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    delete(req, res){
        Message.findByIdAndDelete(req.params.id)
            .then(function(message){
                res.json(message);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    update(req, res){
        Message.findByIdAndUpdate(req.params.id, req.body)
            .then(function(message){
                res.json(message);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    }
}
