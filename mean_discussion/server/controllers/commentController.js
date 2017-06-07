const TopicComment = require('mongoose').model('Comment');
const User = require('mongoose').model('User');
const Topic = require('mongoose').model('Topic')

module.exports = {
    create(req, res){
        TopicComment.create(req.body)
            .then(function(comment){
                    User.findById(comment._user)
                    .then(function(user){
                        user._comments.push(comment);
                        user.save()
                        .then(function(savedUser){
                            Topic.findById(comment._topic)
                            .then(function(topic){
                                topic._comments.push(comment);
                                topic.save()
                                .then(function(savedTopic){
                                    TopicComment.findById(comment._id).populate('_user').populate('_topic').populate('_votes').populate('_replies')
                                    .then(function(comment){
                                        res.json(comment);
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
        TopicComment.findById(req.params.id).populate('_user').populate('_topic').populate('_votes').populate('_replies')
            .then(function(comment){
                res.json(comment);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    delete(req, res){
        TopicComment.findByIDAndDelete(req.params.id)
            .then(function(comment){
                res.json(comment);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    update(req, res){
        TopicComment.findByIdAndUpdate(req.params.id, req.body)
            .then(function(comment){
                res.json(comment);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    index(req, res){
        TopicComment.find().populate('_user').populate('_category').populate('_votes').populate('_replies')
            .then(function(comments){
                res.json(comments);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    }
}
