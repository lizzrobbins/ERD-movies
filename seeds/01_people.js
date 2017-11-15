// id - integer
// name - text
// role - text

exports.seed = function(knex, Promise) {
  return knex('people').del()
    .then(function () {
      const people =[{
        name: 'Guy Ritchie',
        role: 'Director'
      }, {
        name: 'Jason Statham',
        role: 'Actor'
      }, {
        name: 'Robert Downey, Jr.',
        role: 'Actor'
      }];
      return knex('people').insert(people)
    });
};
