const Product = require('mongoose').model('Product');

module.exports = {
    index(req, res){
        Product.find()
            .then(function(products){
                res.json(products);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    show(req, res){
        Product.findById(req.params.id)
        .then(function(product){
            res.json(product);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    },
    create(req, res){
        Product.create(req.body)
            .then(function(product){
                res.json(product);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    },
    update(req, res){
        Product.findByIdAndUpdate(req.params.id, req.body)
        .then(function(product){
            res.json(product);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    },
    delete(req, res){
        Product.findByIdAndRemove(req.params.id)
        .then(function(product){
            res.json(product);
        })
        .catch(function(err){
            res.status(422).json(err);
        })
    }
}
