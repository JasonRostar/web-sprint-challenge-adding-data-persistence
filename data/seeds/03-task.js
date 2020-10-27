exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        { task_desc: 'make sure all the pieces of the table will fit together properly', notes: '', completed: false, project_id: 1 },
        { task_desc: 'make sure the soil has food for the plants', notes: '', completed: false, project_id: 1 },
        { task_desc: 'be sure to bring a towel to wash the car so there are no water spots ', notes: '', completed: false, project_id: 2 },
        { task_desc: 'water the garden often so the plants grow', notes: '', completed: false, project_id: 2 },
        { task_desc: 'bring a level when building the table', notes: '', completed: false, project_id: 3 },
        { task_desc: 'a cordless drill will help with putting together the table', notes: '', completed: false, project_id: 3 },
      ]);
    });
};
