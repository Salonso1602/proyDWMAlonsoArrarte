require('dotenv').config();

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.db_host,
      port: process.env.db_port,
      database: process.env.db_name,
      user: process.env.db_user,
      password: process.env.db_password,
    }
  }
};
