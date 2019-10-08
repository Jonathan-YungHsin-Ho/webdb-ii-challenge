exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: '1JH4DB7663SS076625',
          make: 'Ford',
          model: 'Focus',
          mileage: 12000,
        },
        {
          VIN: '21M2AG11Y72M011885',
          make: 'Mercury',
          model: 'Milan',
          mileage: 11000,
        },
        {
          VIN: '31GBFP22M4C3391212',
          make: 'Honda',
          model: 'Accord',
          mileage: 13000,
        },
      ]);
    });
};
