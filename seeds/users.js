exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(function () {
    const users = [{
      name: 'root',
      email: 'root@gmail.com',
      password: '12345678'
    }, {
      name: 'Yair',
      email: 'ycosio1310@gmail.com',
      password: '12345678'
    }];

    return knex('users').insert(users);
  });
};
