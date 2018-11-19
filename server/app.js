const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./routes/index.js');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use('/', router);

// mongodb://zainal:zainal123@ds255403.mlab.com:55403/blog
// mongodb://localhost:27017/blog
mongoose.connect('mongodb://zainal:zainal123@ds255403.mlab.com:55403/blog', {
    useNewUrlParser: true,
    useCreateIndex: true
});

app.listen(port, function() {
    console.log(`Running on port ${port}`);
});

module.exports = app;