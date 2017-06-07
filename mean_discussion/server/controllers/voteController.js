const Vote = require('mongoose').model('Vote');
const User = require('mongoose').model('User');
const TopicComment = require('mongoose').model('Comment');

module.exports = {
    create(req, res){
        Vote.find({$and:[{'_user':req.body._user}, {'_comment':req.body._comment}]})
        .then(function(prevVote){
            if(prevVote.length > 0){
                throw new Error('you already voted on this one!');
            }
            Vote.create(req.body)
                .then(function(vote){
                    TopicComment.findById(vote._comment)
                    .then(function(comment){
                        comment._votes.push(vote);
                        comment.save()
                            .then(function(savedComment){
                                User.findById(vote._user)
                                .then(function(user){
                                    user._votes.push(vote);
                                    user.save()
                                    .then(function(savedUser){
                                        res.json(vote);
                                    })
                                })
                            })
                    })
                })
        })
        .catch(function(response){
            res.status(422).json(response);
        })
    }
}
