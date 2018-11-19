const Article = require('../models/article.js');

class ArticleController {

    static create(req, res) {
        Article.create({
            title: req.body.title,
            content: req.body.content,
            category: req.body.CategoryId,
            author: req.body.UserId
        })
            .then(resolve => {
                res.status(201).json(resolve);
            })
            .catch(reject => {
                res.status(500).json(reject);
            });
    }

    static getAll(req, res) {
        Article.find()
            .sort({
                updatedAt: -1,
            })
            .then(resolve => {
                res.status(201).json(resolve);
            })
            .catch(reject => {
                res.status(500).json(reject);
            });
    }

    static getOne(req, res) {
        Article.findById(req.params.ArticleId)
            .then(resolve => {
                res.status(201).json(resolve);
            })
            .catch(reject => {
                res.status(500).json(reject);
            });
    }

    static updateOne(req, res) {
        Article.findByIdAndUpdate(req.params.ArticleId,
            {
                title: req.body.title,
                content: req.body.content,
                category: req.body.CategoryId,
                author: req.body.UserId
            }
        )
            .then(resolve => {
                res.status(201).json(resolve);
            })
            .catch(reject => {
                res.status(500).json(reject);
            });
    }

    static delete(req, res) {
        Article.deleteOne({
            _id: req.params.ArticleId
        })
            .then(resolve => {
                res.status(201).json(resolve);
            })
            .catch(reject => {
                res.status(500).json(reject);
            });
    }

}

module.exports = ArticleController;