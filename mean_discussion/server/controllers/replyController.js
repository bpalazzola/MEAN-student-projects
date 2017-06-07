const Reply = require('mongoose').model('Reply');
const TopicComment = require('mongoose').model('Comment');
const User = require('mongoose').model('User');

module.exports = {
    create(req, res){
        Reply.create(req.body)
            .then(function(reply){
                TopicComment.findById(reply._comment)
                .then(function(comment){
                    comment._replies.push(reply);
                    comment.save()
                    .then(function(savedComment){
                        User.findById(reply._user)
                        .then(function(user){
                            user._replies.push(reply);
                            user.save()
                            .then(function(savedUser){
                                Reply.findById(reply._id).populate('_user').populate('_comment')
                                .then(function(reply){
                                    res.json(reply)
                                })
                            })
                        })
                    })
                })
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    show(req, res){
        Reply.findById(req.params.id).populate('_user').populate('_comment')
        .then(function(reply){
            res.json(reply);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    }
}
