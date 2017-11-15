// (‘/directors’) list all movies and their directors

var express = require('express');
var directors = express.Router();
var db = require('../db/knex.js')

/* GET home page. */
directors.get('/', function(req, res, next) {
  // return db.select('title', 'director_id').from('movies')
  return db.select('title', 'name').from('movies').innerJoin('people_movies', 'movies.id', 'people_movies.movies_id').innerJoin('people', 'people.id', 'people_movies.people_id').where('role', 'Director')
  .then(function(movieData) {
    console.log(movieData)
  })
  res.render('index', { title: 'Express' });
});

module.exports = directors;
