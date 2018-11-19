const route = require('express').Router();

const UserController = require('../controllers/user.js');

route.post('/', UserController.create);
route.post('/login', UserController.login);
route.get('/isLogin', UserController.isLogin);

module.exports = route;