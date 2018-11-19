const route = require('express').Router();

const userRoute = require('./user.js');
const articleRoute = require('./article.js');

route.use('/users', userRoute);
route.use('/articles', articleRoute);

module.exports = route;