const route = require('express').Router();

const ArticleController = require('../controllers/article.js');

route.post('/', ArticleController.create);
route.get('/', ArticleController.getAll);
route.get('/:ArticleId', ArticleController.getOne);
route.put('/:ArticleId', ArticleController.updateOne);
route.delete('/:ArticleId', ArticleController.delete);

module.exports = route;