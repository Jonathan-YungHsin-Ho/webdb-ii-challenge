exports.up = function(knex) {
  return knex.schema.createTable('sales', tbl => {
    tbl.increments();
    tbl.date('sale_date').notNullable();
    tbl.float('sale_price').notNullable();
    tbl.string('buyer_name', 128);
    tbl.string('buyer_address', 128);
    tbl.string('seller_name', 128);
    tbl.string('seller_address', 128);
    tbl.integer('odometer_reading');
    tbl
      .foreign('id')
      .references('id')
      .inTable('cars');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
