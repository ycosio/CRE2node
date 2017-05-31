var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/all', function(req, res, next) {
  knex('users')
  .select()
  .then(users => {
    res.json(users);
  });
});
module.exports = router;
