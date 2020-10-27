
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        { resource_name: 'this and that', resource_desc: 'measuring tape will help' },
        { resource_name: 'home depot', resource_desc: 'buy stuff for garden' },
        { resource_name: 'water from a house', resource_desc: 'soap from the kitchen' }
      ]);
    });
};