const Customer = require('mongoose').model('Customer');

module.exports = {
    index(req, res){
        Customer.find()
            .then(function(customers){
                res.json(customers);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    show(req, res){
        Customer.findById(req.params.id)
        .then(function(customer){
            res.json(customer);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    },
    create(req, res){
        Customer.create(req.body)
            .then(function(customer){
                res.json(customer);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    update(req, res){
        Customer.findByIdAndUpdate(req.params.id, req.body)
        .then(function(customer){
            res.json(customer);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    },
    delete(req, res){
        Customer.findByIdAndRemove(req.params.id)
        .then(function(customer){
            res.json(customer);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    }
}
