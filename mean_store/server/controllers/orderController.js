const Order = require('mongoose').model('Order');

module.exports = {
    index(req, res){
        Order.find().populate('_customer').populate('_product')
            .then(function(orders){
                res.json(orders);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    show(req, res){
        Order.findById(req.params.id).populate('_customer').populate('_product')
        .then(function(order){
            res.json(order);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    },
    create(req, res){
        Order.create(req.body)
            .then(function(order){
                Order.findById(order._id).populate('_customer').populate('_product')
                .then(function(order){
                    res.json(order);
                })
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    update(req, res){
        Order.findByIdAndUpdate(req.params.id, req.body)
        .then(function(order){
            res.json(order);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    },
    delete(req, res){
        Order.findByIdAndRemove(req.params.id)
        .then(function(order){
            res.json(order);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    }
}
