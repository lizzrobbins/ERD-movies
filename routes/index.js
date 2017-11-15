var express = require('express');
var router = express.Router();
var db = require('../db/knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  return db.select('title', 'name').from('movies').innerJoin('people_movies', 'movies.id', 'people_movies.movies_id').innerJoin('people', 'people.id', 'people_movies.people_id')
  .then(function(movieData) {
    console.log(movieData)
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
