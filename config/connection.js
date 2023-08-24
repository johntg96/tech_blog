const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    // .env file is working for server.js but not for seeding.
    // ... so.. for now I am just placing the localhost database credentials here.
  //  process.env.DB_NAME,
  'tech_blog_db',
  //  process.env.DB_USER,
  'root',
  //  process.env.DB_PASSWORD,
  null,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
