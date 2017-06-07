const Category = require('mongoose').model('Category');

module.exports = {
    index(req, res){
        Category.find()
            .then(function(categories){
                res.json(categories);
            })
            .catch(function(err){
                res.status(422).json(err);
            })
    }
}
