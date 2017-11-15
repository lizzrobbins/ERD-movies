// id - integer
// name - text
// role - text

exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', (table) => {
    table.increments();
    table.text('name');
    table.text('role');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people')
};
