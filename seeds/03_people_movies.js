// id - integer
// people_id - integer
// movie_id - integer

exports.seed = function(knex, Promise) {

  return knex('people_movies').del()
    .then(function () {
      const people_movies =[{
        id: '1',
        people_id: '1',
        movies_id: '1'
      }, {
        id: '2',
        people_id: '1',
        movies_id: '2'
      }, {
        id: '3',
        people_id: '2',
        movies_id: '1'
      }, {
        id: '4',
        people_id: '3',
        movies_id: '2'
      }];
      return knex('people_movies').insert(people_movies)
    });
};
