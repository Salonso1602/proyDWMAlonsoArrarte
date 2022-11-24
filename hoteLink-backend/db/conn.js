module.exports = require('knex').knex(
  require('../knexfile')[process.env.environment || 'development']
);