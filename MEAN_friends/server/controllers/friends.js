const Friend = require('mongoose').model('Friend');

module.exports = {
  index(req,res){
    Friend.find({})
    .then(function(friends){
        res.json(friends);
    })
    .catch(console.log)
  },
  create(req,res){
      Friend.create(req.body)
      .then(function(friend){
          res.json(friend);
      })
      .catch(console.log);
  },
  update: function(req,res){
      Friend.findByIdAndUpdate(req.params.id, req.body)
      .then(function(friend){
          res.json(friend);
      })
      .catch(console.log)
  },
  delete: function(req,res){
      Friend.findByIdAndRemove(req.params.id)
      .then(function(friend){
          res.json(friend);
      })
  },
  show(req,res){
      Friend.findById(req.params.id)
      .then(function(friend){
          res.json(friend);
      })
      .catch(console.log);
  }
}
