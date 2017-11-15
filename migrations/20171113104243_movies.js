// id - integer
// title - text
// director_id - integer

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('movies', (table) => {
      table.increments();
      table.text('title');
      table.integer('director_id').references('people.id').onDelete('CASCADE');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('movies')
  ])
};
