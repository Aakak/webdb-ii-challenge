
exports.up = function(knex) {
   return knex.schema.createTable('cars', function (table) {
        table.increments();
    table.string('VIN', 128).notNullable();
    table.string('make', 64).notNullable();
    table.string('model', 64).notNullable();
    table.string('mileage', 255).notNullable();
    table.string('status', 100);
    table.string('transmission_type', 100);
    table.timestamps(true, true);
  });
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
