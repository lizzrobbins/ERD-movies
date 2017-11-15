// (‘/movies’) list all movies

var express = require('express');
var movies = express.Router();
var db = require('../db/knex.js')

/* GET home page. */
movies.get('/', function(req, res, next) {
  return db.select('title').from('movies')
  .then(function(movieData) {
    console.log(movieData)
  })
  res.render('index', { title: 'Express' });
});

module.exports = movies;
