exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.dropColumn('mileage');
  });
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.integer('mileage');
  });
};
