
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { project_name: 'Build a table', project_desc: 'Can be built with wood and nails', completed: false },
        { project_name: 'Plant a garden', project_desc: 'buy plants and seeds to put in yard', completed: false },
        { project_name: 'Wash the car', project_desc: 'soap, water, and a brush', completed: false }
      ]);
    });
};