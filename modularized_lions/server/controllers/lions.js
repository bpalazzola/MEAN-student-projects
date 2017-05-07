const mongoose = require('mongoose');
const Lion = mongoose.model('Lion');

module.exports = {
    show: function(req, res){
        Lion.find({}, function(err, lions){
            if(err){
                console.log(err);
            }
            res.render('index', {lions: lions})
        })
    },
    create: function(req, res){
        const lion = new Lion(req.body);
        lion.save(function(err){
            if(err){
                res.render('new_lion', {errors: err})
            }
            res.redirect('/')
        })
    },
    showOne: function(req, res){
        Lion.findOne({_id: req.params.id}, function(err, lion){
            if(err){
                console.log(err)
            }
            res.render('one_lion', {lion: lion})
        })
    },
    showOneEdit: function(req, res){
        Lion.findOne({_id: req.params.id}, function(err, lion){
            if(err){
                res.redirect('/')
            }
            res.render('edit', {lion: lion});
        })
    },
    update: function(req, res){
        Lion.update({_id: req.params.id}, req.body, function(err){
            if(err){
                res.redirect(`/lions/edit/${req.params.id}`)
            }
            res.redirect(`/lions/${req.params.id}`)
        })
    },
    delete: function(req, res){
        Lion.remove({_id: req.params.id}, function(err){
            if(err){
                console.log(err);
            }
            res.redirect('/')
        })
    }
}
