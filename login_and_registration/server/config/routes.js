const userController = require('../controllers/users.js');

module.exports = function(app){
    app.post('/auth/login', userController.login);
    app.post('/auth/register', userController.register);
    app.delete('/auth/logout/:id', userController.logout);
}
