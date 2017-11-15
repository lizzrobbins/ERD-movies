// (‘/actors’) list all actors and their movies

var express = require('express');
var actors = express.Router();
var db = require('../db/knex.js')

/* GET home page. */
actors.get('/', function(req, res, next) {
  return db.select('name', 'title').from('movies').innerJoin('people_movies', 'movies.id', 'people_movies.movies_id').innerJoin('people', 'people.id', 'people_movies.people_id').where('role', 'Actor')
  .then(function(movieData) {
    console.log(movieData)
  })
  res.render('index', { title: 'Express' });
});

module.exports = actors;
