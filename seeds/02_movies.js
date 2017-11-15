// id - integer
// title - text
// director_id - integer

exports.seed = function(knex, Promise) {
  return knex('movies').del()
    .then(function () {
      const movies =[{
        title: 'Snatch',
        director_id: '1'
      }, {
        title: 'Sherlock Holmes',
        director_id: '1'
      }];
      return knex('movies').insert(movies)
    });
};
