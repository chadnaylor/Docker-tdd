var express = require('express');
var router = express.Router();
var knexdb = require('../db/knex');

router.get('/', function (req, res, next) {
    knexdb('books').then(function (books) {
        res.json(books)
    }).catch(function (err) {
        next(new Error(err));
    })

});

module.exports = router;