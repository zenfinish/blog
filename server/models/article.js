const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    content: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    author: { type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;