const Topic = require('mongoose').model('Topic');
const User = require('mongoose').model('User');

module.exports = {
    create(req, res){
        Topic.create(req.body)
            .then(function(topic){
                    User.findById(topic._user.toString())
                    .then(function(user){
                        user._topics.push(topic);
                        user.save()
                        .then(function(){
                            Topic.findById(topic._id).populate('_user').populate('_category').populate('_comments')
                            .then(function(topic){
                                res.json(topic);
                            })

                        })
                    })
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    show(req, res){
        Topic.findById(req.params.id).populate('_user').populate('_category').populate('_comments')
            .then(function(topic){
                res.json(topic);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    delete(req, res){
        Topic.findByIDAndDelete(req.params.id)
            .then(function(topic){
                res.json(topic);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    update(req, res){
        Topic.findByIdAndUpdate(req.params.id, req.body)
            .then(function(topic){
                res.json(topic);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    index(req, res){
        Topic.find().populate('_user').populate('_category').populate('_comments')
            .then(function(topics){
                res.json(topics);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    }
}
