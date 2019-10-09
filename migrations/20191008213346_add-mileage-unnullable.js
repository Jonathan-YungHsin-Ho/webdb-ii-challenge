exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl
      .integer('mileage')
      .defaultTo(0)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.dropColumn('mileage');
  });
};
