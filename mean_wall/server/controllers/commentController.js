const MessageComment = require('mongoose').model('Comment');
const Message = require('mongoose').model('Message');
const User = require('mongoose').model('User');

module.exports = {
    create(req, res){
        MessageComment.create(req.body)
            .then(function(comment){
                Message.findById(comment._message.toString())
                .then(function(message){
                    message._comments.push(comment);
                    message.save()
                    .then(function(){
                        User.findById(comment._user.toString())
                        .then(function(user){
                            user._comments.push(comment);
                            user.save()
                            .then(function(){
                                res.json(comment);
                            })
                        })
                    })
                })
            })
            .catch(function(err){
                console.log(err);
                res.status(422).json(err);
            })
    },
    show(req, res){
        MessageComment.findById(req.params.id).populate('_user')
            .then(function(comment){
                res.json(comment);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    delete(req, res){
        MessageComment.findByIDAndDelete(req.params.id)
            .then(function(comment){
                res.json(comment);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    update(req, res){
        MessageComment.findByIdAndUpdate(req.params.id, req.body)
            .then(function(comment){
                res.json(comment);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    index(req, res){
        MessageComment.find({'_message':req.params.id}).populate('user')
            .then(function(comments){
                res.json(comments);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    }
}
